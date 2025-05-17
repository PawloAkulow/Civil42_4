/**
 * Mock OpenAI API Proxy for Civil42 Application
 *
 * This module simulates a server-side API endpoint that would normally handle
 * OpenAI API requests. It contains the model settings, prompt engineering,
 * and context management that would typically be on the server.
 */

// Ensure process.env exists
if (typeof process === "undefined" || !process.env) {
  window.process = window.process || {
    env: {
      NODE_ENV: "development",
      OPENAI_API_KEY: "",
      AI_MODEL: "gpt-4.1-nano",
      MOCK_DELAY: "300",
    },
  };
}

// Get OpenAI API key from environment variable
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

// Utility function to check if we're running via file:// protocol
// Use existing global function if available to avoid duplicate declarations
const isLocalFileProtocol =
  typeof window.isLocalFileProtocol === "function"
    ? window.isLocalFileProtocol
    : () => window.location.protocol === "file:";

// Store the function globally for other scripts to use
if (typeof window.isLocalFileProtocol !== "function") {
  window.isLocalFileProtocol = isLocalFileProtocol;
}

// Check if we have a valid API key
const isApiKeyValid = () => {
  return (
    OPENAI_API_KEY &&
    OPENAI_API_KEY.startsWith("sk-") &&
    OPENAI_API_KEY.length > 20 &&
    !isLocalFileProtocol() // Always return false for local file protocol
  );
};

// System prompt template with guardrails for the AI assistant
const systemPromptTemplate = `
Jesteś Sharky - zaawansowanym asystentem AI stoworzonym dla pracowników Urzędu Gminy. 
Twoja główna funkcja to pomaganie w monitorowaniu zasobów gminy i wsparcie w sytuacjach kryzysowych.

### TWOJA TOŻSAMOŚĆ:
- Zawsze identyfikuj się jako "Sharky" - asystent AI systemu SharkIT
- Używaj polskiego języka, profesjonalnie ale przyjaźnie
- Jesteś ekspertem w zarządzaniu zasobami gminy i sytuacjach kryzysowych
- Dajesz praktyczne i konkretne odpowiedzi na pytania związane z zarządzaniem gminą

### DANE DEMOGRAFICZNE GMINY BEŁCHATÓW:
- Liczba mieszkańców: 11539
- Turyści średnio: 500
- Zarejestrowanych wyborców: 6890
- Instytucje publiczne: 14
- Populacja zwierząt: 
  * Bydło: 1200 (potrzebuje 10kg jedzenia i 50L wody dziennie)
  * Trzoda chlewna: 3500 (3kg jedzenia, 10L wody dziennie)
  * Drób: 15000 (0.15kg jedzenia, 0.3L wody dziennie)
  * Owce/Kozy: 300 (2kg jedzenia, 8L wody dziennie)
- Rezerwy ziarna na siew: 250 ton

### ZASADY DZIAŁANIA:
1. Opieraj odpowiedzi na faktach i danych z kontekstu
2. Kiedy nie znasz odpowiedzi, przyznaj się do tego zamiast wymyślać informacje
3. Nie ujawniaj żadnych poufnych danych ani wrażliwych informacji dotyczących bezpieczeństwa
4. Nie angażuj się w dyskusje polityczne ani światopoglądowe
5. Pomóż przeprowadzić analizę danych, jeśli użytkownik tego potrzebuje
6. W przypadku pytań o sytuacje kryzysowe, podawaj tylko oficjalne i sprawdzone procedury

### KONTEKST BIEŻĄCEJ ROZMOWY:
{{CONTEXT}}

Odpowiadaj tak, by pomóc użytkownikowi w efektywnym zarządzaniu zasobami gminy lub w sytuacji kryzysowej.
`;

/**
 * Get response from mocked OpenAI API
 * @param {Object} requestData - Request data containing prompt, history and context
 * @returns {Promise<Object>} Promise resolving to response object
 */
const getMockOpenAIResponse = async (requestData) => {
  // If running in local file protocol, always use mock responses
  if (isLocalFileProtocol()) {
    console.log("Using mock API response due to local file protocol");

    // Simulate thinking delay (more complex prompts take longer)
    const thinkingTime = Math.min(800 + requestData.prompt.length * 2, 2000);
    await new Promise((resolve) => setTimeout(resolve, thinkingTime));

    // Use our mock response generator
    const mockResponse = getMockResponseBasedOnPrompt(
      requestData.prompt,
      requestData.contextData
    );

    return {
      id: "mock-response-" + Date.now(),
      content: mockResponse,
      model: "gpt-4.1-nano-local-simulation",
      created: Date.now(),
    };
  }

  // If we have a valid API key, try to use the real OpenAI API
  if (isApiKeyValid()) {
    try {
      return await getRealOpenAIResponse(requestData);
    } catch (error) {
      console.warn(
        "Failed to use real OpenAI API, falling back to mock:",
        error
      );
      // Fall back to mock if API call fails
    }
  }

  // Create context string from provided data
  let contextString = "";
  if (requestData.contextData) {
    contextString = `Kontekst rozmowy: ${JSON.stringify(
      requestData.contextData,
      null,
      2
    )}`;
  }

  // Format the system prompt with context
  const systemPrompt = systemPromptTemplate.replace(
    "{{CONTEXT}}",
    contextString
  );

  // Create a simplified conversation history for the AI
  const conversationHistory = [{ role: "system", content: systemPrompt }];

  // Add real conversation history if available
  if (requestData.history && Array.isArray(requestData.history)) {
    for (const message of requestData.history) {
      if (message.role === "system") continue; // Skip existing system messages
      conversationHistory.push({
        role: message.role,
        content: message.content,
      });
    }
  }

  // Add current user prompt
  conversationHistory.push({ role: "user", content: requestData.prompt });

  // Simulate thinking delay (more complex prompts take longer)
  const thinkingTime = Math.min(1000 + requestData.prompt.length * 5, 3000);
  await new Promise((resolve) => setTimeout(resolve, thinkingTime));

  // Generate a mock AI response based on the prompt
  let mockResponse = getMockResponseBasedOnPrompt(
    requestData.prompt,
    requestData.contextData
  );

  return {
    id: "mock-response-" + Date.now(),
    content: mockResponse,
    model: "gpt-4.1-nano-mockup",
    systemPrompt: systemPrompt,
    created: Date.now(),
  };
};

/**
 * Get a response from the real OpenAI API
 * @param {Object} requestData - Request data containing prompt, history and context
 * @returns {Promise<Object>} Promise resolving to response object
 */
const getRealOpenAIResponse = async (requestData) => {
  // Create context string from provided data
  let contextString = "";
  if (requestData.contextData) {
    contextString = `Kontekst rozmowy: ${JSON.stringify(
      requestData.contextData,
      null,
      2
    )}`;
  }

  // Format the system prompt with context
  const systemPrompt = systemPromptTemplate.replace(
    "{{CONTEXT}}",
    contextString
  );

  // Create the messages array
  const messages = [{ role: "system", content: systemPrompt }];

  // Add conversation history if available
  if (requestData.history && Array.isArray(requestData.history)) {
    for (const message of requestData.history) {
      if (message.role === "system") continue; // Skip existing system messages
      messages.push({
        role: message.role,
        content: message.content,
      });
    }
  }

  // Add current user prompt
  messages.push({ role: "user", content: requestData.prompt });

  try {
    // Make the real API request to OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-nano", // Use the specified model
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `OpenAI API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return {
      id: data.id,
      content: data.choices[0].message.content,
      model: data.model,
      systemPrompt: systemPrompt,
      created: data.created,
    };
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
};

/**
 * Generate a mock response based on the user's prompt
 * @param {string} prompt - User's prompt
 * @param {Object} contextData - Additional context data
 * @returns {string} Mock AI response
 */
const getMockResponseBasedOnPrompt = (prompt, contextData) => {
  const lowercasePrompt = prompt.toLowerCase();

  // Demographic information responses
  if (
    lowercasePrompt.includes("ile mieszkańców") ||
    lowercasePrompt.includes("liczba mieszkańców") ||
    lowercasePrompt.includes("populacja gminy")
  ) {
    return "Według aktualnych danych, Gmina Bełchatów liczy 11,539 stałych mieszkańców oraz średnio około 500 turystów dziennie.";
  }

  if (
    lowercasePrompt.includes("ile zwierząt") ||
    lowercasePrompt.includes("populacja zwierząt")
  ) {
    return "Na terenie Gminy Bełchatów znajduje się: 1,200 sztuk bydła, 3,500 sztuk trzody chlewnej, 15,000 sztuk drobiu oraz 300 owiec i kóz.";
  }

  if (
    lowercasePrompt.includes("woda") ||
    lowercasePrompt.includes("zapasy wody")
  ) {
    return "Dzienne zapotrzebowanie na wodę w Gminie wynosi około 60,000 litrów dla wszystkich zwierząt hodowlanych oraz 230,780 litrów dla mieszkańców (przy założeniu 20L na osobę dziennie). Zalecam monitorowanie zapasów i źródeł wody, aby zapewnić co najmniej 7-dniową rezerwę.";
  }

  if (
    lowercasePrompt.includes("żywność") ||
    lowercasePrompt.includes("zapasy żywności") ||
    lowercasePrompt.includes("jedzenie")
  ) {
    return "Dzienne zapotrzebowanie na żywność dla zwierząt hodowlanych w gminie wynosi około: 12,000 kg dla bydła, 10,500 kg dla trzody chlewnej, 2,250 kg dla drobiu i 600 kg dla owiec/kóz. Posiadamy 250 ton rezerwy ziarna na siew. Rekomendowana rezerwa żywności dla ludności to minimum 3 dni zapasów.";
  }

  if (
    lowercasePrompt.includes("instytucje") ||
    lowercasePrompt.includes("budynki publiczne")
  ) {
    return "W Gminie Bełchatów znajduje się 14 instytucji publicznych, w tym urząd gminy, szkoły, ośrodki zdrowia oraz inne placówki świadczące usługi publiczne.";
  }

  // Default response for other queries
  return "Jako asystent AI dla Gminy Bełchatów, mogę pomóc z analizą danych demograficznych, planowaniem zasobów, oraz wsparciem w sytuacjach kryzysowych. Jeśli potrzebujesz konkretnych informacji o gminie, zasobach, lub procedurach zarządzania, proszę sprecyzuj swoje pytanie.";
};

// Create a simulated API endpoint handler
const handleOpenAIRequest = async (requestData) => {
  try {
    // Get headers from .env if available
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // In production, restrict this
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight OPTIONS request
    if (requestData.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Handle actual POST request
    if (requestData.method === "POST") {
      const body = await requestData.json();

      // Process the request through our mock or real handler
      const responseData = await getMockOpenAIResponse(body);

      // Return the response
      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    // Any other method is not allowed
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Error in OpenAI proxy handler:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
};

// Set up route handler
const setupOpenAIRouteHandler = () => {
  // In a real implementation, this would be on the server side
  // Here, we're simulating it in the browser
  window.routes = window.routes || {};

  window.routes["/api/openai-chat"] = handleOpenAIRequest;

  console.log("Mock OpenAI endpoint registered at /api/openai-chat");
};

// Initialize on load
setupOpenAIRouteHandler();

// Optionally expose for testing
window.openaiProxy = {
  getMockOpenAIResponse,
  getRealOpenAIResponse,
};
