// Define global isLocalFileProtocol function first
// This should be the single source of truth for this function in the application
if (typeof window.isLocalFileProtocol === "undefined") {
  window.isLocalFileProtocol = () => window.location.protocol === "file:";
  console.log("Global isLocalFileProtocol defined by env-setup.js");
} else {
  console.log(
    "Global isLocalFileProtocol already defined, skipping definition in env-setup.js"
  );
}

// Initialize process.env for browser environment
window.process = {
  env: {
    // OpenAI configuration
    OPENAI_API_KEY: undefined,
    AI_MODEL: "gpt-4-turbo-preview",

    // Backend configuration
    BACKEND_URL: "http://localhost:3001",
    API_ENABLED: "true", // Set to "false" to disable backend API and use mocks

    // General settings
    MOCK_DELAY: "300",
    NODE_ENV: "development",
  },
};

// Initialize knowledge base by preloading all mock data
async function initializeKnowledgeBase() {
  try {
    // Load JSON files into localStorage
    const files = [
      { name: "demographic", key: "demographic" },
      { name: "gminas", key: "gminas" },
      { name: "resources", key: "resources" },
    ];

    for (const file of files) {
      const response = await fetch(`mocks/${file.name}.json`);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem(file.key, JSON.stringify(data));
        console.log(`Loaded ${file.name} data into localStorage`);
      } else {
        console.error(`Failed to load ${file.name}.json`);
      }
    }

    // Also create a combined knowledge base entry
    const demographic = JSON.parse(localStorage.getItem("demographic") || "{}");
    const gminas = JSON.parse(localStorage.getItem("gminas") || "{}");
    const resources = JSON.parse(localStorage.getItem("resources") || "[]");

    // Store comprehensive knowledge base
    localStorage.setItem(
      "assistantKnowledge",
      JSON.stringify({
        demographic,
        gminas,
        resources,
        lastUpdated: new Date().toISOString(),
      })
    );

    console.log("Knowledge base initialized successfully");
  } catch (error) {
    console.error("Error initializing knowledge base:", error);
  }
}

// Initialize environment variables
console.log("Environment variables initialized");

// Initialize knowledge base
initializeKnowledgeBase();
