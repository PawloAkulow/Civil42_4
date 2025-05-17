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
        "Witaj! Jestem Cywil, asystentem AI dla systemu monitorowania zasobów gminy. W czym mogę pomóc?",
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
 * Get response from OpenAI API via our backend
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
  // Get backend URL from environment
  const backendUrl =
    window.process?.env?.BACKEND_URL || "http://localhost:3001";
  const apiEnabled = window.process?.env?.API_ENABLED !== "false";

  // If we're running from a local file or API is disabled, don't attempt API call
  if (window.isLocalFileProtocol() || !apiEnabled) {
    console.log(
      "Running locally with file:// protocol or API disabled - using simulated AI responses"
    );
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate response time
    return generateLocalFallbackResponse(userInput, contextData);
  }

  try {
    // Make the API call to our new backend server instead of the mock endpoint
    const response = await fetch(`${backendUrl}/api/chat`, {
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
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `Backend API error: ${response.status} ${response.statusText}`
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
        "Brak połączenia z backendem API. Aby korzystać z pełnej wersji asystenta AI:\n\n" +
        "1. Upewnij się, że serwer backend działa na http://localhost:3001\n" +
        "2. Sprawdź, czy klucz API OpenAI jest poprawnie skonfigurowany w pliku backend/.env\n" +
        "3. Jeśli potrzebujesz natychmiastowej pomocy, ustaw API_ENABLED=false w env-setup.js\n\n" +
        "Przechodzę do trybu offline z ograniczoną funkcjonalnością."
      );
    }

    return (
      "Przepraszam, nie mogę teraz odpowiedzieć. Wystąpił błąd: " +
      error.message
    );
  }
};

// Define the missing fallback function
function generateLocalFallbackResponse(userInput, contextData) {
  console.log("Using generateLocalFallbackResponse in realAI.js", {
    userInput,
    contextData,
  });
  // Simple fallback, can be expanded later
  if (userInput && userInput.toLowerCase().includes("pomoc")) {
    return "Działam w trybie lokalnym (plik). Podstawowa pomoc jest dostępna. Jak mogę asystować?";
  }
  return "Odpowiedź z trybu lokalnego (plik). Funkcjonalność ograniczona.";
}

// Expose to global scope
window.realAI = {
  getConversationLog,
  addMessage,
  getResponse,
};
