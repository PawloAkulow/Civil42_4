/**
 * Real AI Assistant Service for Civil42 Application
 *
 * This module integrates with OpenAI's API to provide real AI assistant responses
 * based on user queries and conversation context.
 */

/**
 * Get conversation history or create a new one if empty
 * @param {string} contextType - Type of context for conversation (freestyle, resource-specific, etc.)
 * @param {Object} initialContextData - Initial context data for new conversation
 * @returns {Promise<Array>} Promise resolving to conversation log
 */
const getConversationLog = async (
  contextType = "freestyle",
  initialContextData = {}
) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Get from localStorage or create new
  const contextKey = `aiConversationLog_${contextType}`;
  const storedLog = localStorage.getItem(contextKey);

  if (storedLog) {
    return JSON.parse(storedLog);
  }

  // Return initial welcome message
  const initialLog = [
    {
      role: "assistant",
      content:
        "Witaj! Jestem Sharky, asystentem AI dla systemu monitorowania zasobów gminy. W czym mogę pomóc?",
      timestamp: new Date().toISOString(),
    },
  ];

  localStorage.setItem(contextKey, JSON.stringify(initialLog));
  return initialLog;
};

/**
 * Add message to conversation log
 * @param {string} role - Message role ('user' or 'assistant')
 * @param {string} content - Message content
 * @param {string} contextType - Context type (freestyle, etc.)
 * @param {Array} currentLog - Current conversation log to update
 * @returns {Promise<Array>} Promise resolving to updated conversation log
 */
const addMessage = async (
  role,
  content,
  contextType = "freestyle",
  currentLog = []
) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Use provided log or get from storage
  let log = currentLog;
  if (!log || log.length === 0) {
    log = await getConversationLog(contextType);
  }

  // Add new message
  const newMessage = {
    role,
    content,
    timestamp: new Date().toISOString(),
  };
  log.push(newMessage);

  // Save to localStorage
  const contextKey = `aiConversationLog_${contextType}`;
  localStorage.setItem(contextKey, JSON.stringify(log));

  return log;
};

/**
 * Check if we're running on a local file:// protocol
 * @returns {boolean} True if running on file:// protocol
 */
const isLocalFileProtocol =
  typeof window.isLocalFileProtocol === "function"
    ? window.isLocalFileProtocol
    : () => window.location.protocol === "file:";

// Store the function globally for other scripts to use
if (typeof window.isLocalFileProtocol !== "function") {
  window.isLocalFileProtocol = isLocalFileProtocol;
}

/**
 * Generate a local fallback response
 * @param {string} userInput - The user's input message
 * @param {Object} contextData - Context data about the conversation
 * @returns {string} A simulated AI response
 */
const generateLocalFallbackResponse = (userInput, contextData) => {
  // Simple responses based on keywords in user input
  const input = userInput.toLowerCase();

  if (
    input.includes("witaj") ||
    input.includes("cześć") ||
    input.includes("hej")
  ) {
    return "Witaj! Jak mogę pomóc w zarządzaniu zasobami gminy?";
  }

  if (input.includes("pomoc") || input.includes("pomocy")) {
    return "Jestem Sharky, asystent AI. Mogę pomóc w analizowaniu danych demograficznych, planowaniu zasobów i dostarczaniu informacji o stanie gminy. Co chciałbyś wiedzieć?";
  }

  if (input.includes("zasoby") || input.includes("zapasy")) {
    return "W systemie monitorowania zasobów możesz sprawdzić aktualne zapasy, zaplanować nowe zamówienia i analizować trendy wykorzystania. Czy interesuje Cię konkretny rodzaj zasobów?";
  }

  if (
    input.includes("alarm") ||
    input.includes("kryzys") ||
    input.includes("kryzysow")
  ) {
    return "W trybie kryzysowym mogę pomóc w koordynacji dostępnych zasobów, komunikacji z innymi jednostkami i optymalizacji planów działania. Czy potrzebujesz konkretnych informacji o protokołach kryzysowych?";
  }

  if (
    input.includes("demograficz") ||
    input.includes("ludność") ||
    input.includes("mieszkańc")
  ) {
    // Include some of the contextData if available
    let demographicInfo = "";
    if (contextData && contextData.demographic) {
      const demo = contextData.demographic;
      demographicInfo = `\nAktualne dane demograficzne: Populacja: ${
        demo.population || "brak danych"
      }, Średni wiek: ${demo.averageAge || "brak danych"}.`;
    }

    return `Dane demograficzne są kluczowe dla planowania zasobów gminy. Pozwalają przewidzieć zapotrzebowanie na wodę, żywność i energię.${demographicInfo}`;
  }

  // Default response with timestamp to show it's reactive
  return `Działam teraz w trybie lokalnym (${new Date().toLocaleTimeString()}). Aby korzystać z pełnych możliwości asystenta AI, uruchom aplikację przez serwer HTTP, nie przez plik lokalny.`;
};

/**
 * Get response from OpenAI API
 * @param {string} userInput - User message
 * @param {Array} conversationHistory - Previous messages in conversation
 * @param {Object} contextData - Context data to provide to AI (e.g. demographic info)
 * @returns {Promise<string>} Promise resolving to AI response
 */
const getResponse = async (
  userInput,
  conversationHistory = [],
  contextData = {}
) => {
  // If we're running from a local file, don't attempt API call
  if (isLocalFileProtocol()) {
    console.log(
      "Running locally with file:// protocol - using simulated AI responses"
    );
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate response time
    return generateLocalFallbackResponse(userInput, contextData);
  }

  try {
    // Make the API call to our backend proxy
    const response = await fetch("/api/openai-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userInput,
        history: conversationHistory,
        contextData: contextData,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `OpenAI API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return (
      data.content || "Przepraszam, wystąpił problem z uzyskaniem odpowiedzi."
    );
  } catch (error) {
    console.error("Real AI response error:", error);

    // Provide a more helpful response that includes instructions for setup
    if (
      error.message.includes("Failed to fetch") ||
      error.message.includes("NetworkError")
    ) {
      return (
        "Brak połączenia z API. Aby korzystać z pełnej wersji asystenta AI:\n\n" +
        "1. Uruchom aplikację przez serwer HTTP (np. używając Python: 'python -m http.server')\n" +
        "2. Dodaj klucz API OpenAI w pliku .env\n" +
        "3. Skonfiguruj backend do obsługi zapytań OpenAI\n\n" +
        "Jeśli potrzebujesz natychmiastowej pomocy, uruchom aplikację w trybie Demo."
      );
    }

    return (
      "Przepraszam, nie mogę teraz odpowiedzieć. Wystąpił błąd: " +
      error.message
    );
  }
};

// Expose to global scope
window.realAI = {
  getConversationLog,
  addMessage,
  getResponse,
};
