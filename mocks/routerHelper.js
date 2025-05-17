/**
 * Mock API Router Helper for Civil42 Application
 *
 * This module simulates a server-side router by intercepting fetch requests
 * to certain endpoints and redirecting them to our mock handlers.
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

// Store for our registered routes
window.routes = window.routes || {};

// Original fetch function
const originalFetch = window.fetch;

// Use the global isLocalFileProtocol function - no local declaration
// This prevents duplicate variable declaration errors

/**
 * Intercept fetch requests to handle our mock API routes
 * @param {string} url - Request URL
 * @param {Object} options - Fetch options
 * @returns {Promise} Promise resolving to Response object
 */
window.fetch = async function (url, options) {
  // Only intercept if it's a string URL (not Request object)
  if (typeof url === "string") {
    try {
      // For local file protocol, handle special cases
      if (window.isLocalFileProtocol() && url.startsWith("/api/")) {
        console.log(`Local file protocol detected, simulating ${url} endpoint`);
        const mockResponse = new Response(
          JSON.stringify({
            status: "success",
            content: "Lokalny tryb symulacji API - odpowiedź domyślna.",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
        return mockResponse;
      }

      // Check if the URL matches any of our registered routes
      const parsedUrl = new URL(url, window.location.origin);
      const path = parsedUrl.pathname;

      if (window.routes[path]) {
        console.log(`Intercepting request to ${path}`);
        // Create a request object to pass to our handler
        const request = new Request(url, options);
        return await window.routes[path](request);
      }
    } catch (error) {
      console.warn("Router error handling fetch:", error);
      // Return a mock response for better user experience
      return new Response(
        JSON.stringify({
          status: "error",
          content:
            "Nie można przetworzyć żądania. Sprawdź konsolę deweloperską.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  // Pass through to original fetch for non-matching URLs
  return originalFetch.apply(this, arguments);
};

/**
 * Load environment variables from .env file
 * @returns {Promise<void>}
 */
const loadEnvVars = async () => {
  try {
    // Skip if we're using file:// protocol
    if (window.isLocalFileProtocol()) {
      console.log("Running with file:// protocol, skipping .env file loading");
      return;
    }

    const response = await originalFetch(".env");
    if (response.ok) {
      const text = await response.text();
      const lines = text.split("\n");

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
          const [key, value] = trimmed.split("=");
          if (key && value) {
            process.env[key.trim()] = value.trim();
            console.log(`Loaded env var: ${key.trim()}`);
          }
        }
      }
    }
  } catch (error) {
    console.warn("Failed to load .env file:", error);
  }
};

// Setup function to initialize the router
const setupRouter = async () => {
  // Load environment variables
  await loadEnvVars();

  // Log that we're ready
  console.log("Mock API Router initialized");
};

// Run setup
setupRouter();

// Expose API
window.routerHelper = {
  registerRoute: (path, handler) => {
    window.routes[path] = handler;
    console.log(`Route registered: ${path}`);
  },
  unregisterRoute: (path) => {
    delete window.routes[path];
    console.log(`Route unregistered: ${path}`);
  },
};
