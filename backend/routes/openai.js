/**
 * OpenAI API Route Handler
 *
 * This module handles all OpenAI-related API routes, properly implementing
 * the OpenAI Node.js library for chat completions and other features.
 */

const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");

// Initialize OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Validate chat request body
 * @param {Object} body - Request body
 * @returns {Object} - Validation result with error message if invalid
 */
const validateChatRequest = (body) => {
  const { prompt, history, contextData } = body;

  if (!prompt || typeof prompt !== "string") {
    return { valid: false, error: "Prompt is required and must be a string" };
  }

  if (history && !Array.isArray(history)) {
    return { valid: false, error: "History must be an array if provided" };
  }

  // All checks passed
  return { valid: true };
};

/**
 * Chat completion endpoint
 * Handles getting responses from OpenAI based on user prompts and context
 */
router.post("/chat", async (req, res) => {
  try {
    // Validate request
    const validation = validateChatRequest(req.body);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }

    const { prompt, history = [], contextData = {} } = req.body;

    // Create context string from provided data
    let contextString = "";
    if (contextData && Object.keys(contextData).length > 0) {
      contextString = `Kontekst rozmowy: ${JSON.stringify(
        contextData,
        null,
        2
      )}`;
    }

    // System prompt template (maintain the same as the original)
    const systemPromptTemplate = `
Jesteś Cywil - zaawansowanym asystentem AI stoworzonym dla pracowników Urzędu Gminy. 
Twoja główna funkcja to pomaganie w monitorowaniu zasobów gminy i wsparcie w sytuacjach kryzysowych.

### TWOJA TOŻSAMOŚĆ:
- Zawsze identyfikuj się jako "Cywil" - asystent AI systemu monitorowania zasobów gminy
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
${contextString}

Odpowiadaj tak, by pomóc użytkownikowi w efektywnym zarządzaniu zasobami gminy lub w sytuacji kryzysowej.
`;

    // Format the messages array for OpenAI
    const messages = [{ role: "system", content: systemPromptTemplate }];

    // Add conversation history if available
    if (history && Array.isArray(history)) {
      for (const message of history) {
        if (message.role === "system") continue; // Skip existing system messages
        messages.push({
          role: message.role,
          content: message.content,
        });
      }
    }

    // Add current user prompt
    messages.push({ role: "user", content: prompt });

    // Make the API request to OpenAI using the library
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // Use appropriate model based on access
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Extract the response
    const responseMessage = completion.choices[0].message;

    // Return a response format matching the original implementation
    return res.status(200).json({
      id: completion.id,
      content: responseMessage.content,
      model: completion.model,
      systemPrompt: systemPromptTemplate,
      created: completion.created,
    });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);

    // Handle different error types
    if (error.code === "invalid_api_key") {
      return res.status(401).json({
        error: "Invalid API key provided",
        message: "Please check your OpenAI API key configuration.",
      });
    } else if (error.code === "rate_limit_exceeded") {
      return res.status(429).json({
        error: "Rate limit exceeded",
        message: "OpenAI API rate limit exceeded. Please try again later.",
      });
    }

    // Generic error response
    return res.status(500).json({
      error: "Error processing your request",
      message: error.message || "An unknown error occurred",
    });
  }
});

module.exports = router;
