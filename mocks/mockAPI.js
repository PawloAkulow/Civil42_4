/**
 * Mock API Service for Civil42 Application
 *
 * This module simulates a backend API by providing CRUD operations using
 * localStorage for persistence. It maintains the same interface that a real
 * API would have but operates entirely client-side.
 */

// Import mock data as initial data source
const initialMockData = window.mockData || {};

/**
 * Initializes the mock storage if it doesn't exist
 * @param {string} key - Storage key
 * @param {*} defaultData - Default data to use if storage is empty
 */
function initializeStorage(key, defaultData) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(defaultData));
  }
}

// Initialize localStorage with default mock data
function initializeMockStorage() {
  if (initialMockData) {
    initializeStorage("resources", initialMockData.resources || []);
    initializeStorage("gminas", initialMockData.gminas || {});
    initializeStorage("demographic", initialMockData.demographic || {});
    initializeStorage("populationZones", initialMockData.populationZones || []);
  }
}

/**
 * Get data from localStorage
 * @param {string} key - Storage key
 * @returns {*} Parsed data from localStorage or null if not found
 */
function getStorageData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {*} data - Data to save
 */
function saveStorageData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Reset mock data to initial values
 */
function resetMockData() {
  if (initialMockData) {
    saveStorageData("resources", initialMockData.resources || []);
    saveStorageData("gminas", initialMockData.gminas || {});
    saveStorageData("demographic", initialMockData.demographic || {});
    saveStorageData("populationZones", initialMockData.populationZones || []);
  }
}

/**
 * Simulates network delay
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after the delay
 */
function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Mock API Object with CRUD operations
const mockAPI = {
  // Resource Operations
  resources: {
    /**
     * Get all resources
     * @param {Object} options - Filter options
     * @returns {Promise<Array>} Promise resolving to resources array
     */
    getAll: async (options = {}) => {
      await delay();
      let resources = getStorageData("resources") || [];

      // Apply filters if provided
      if (options.category) {
        resources = resources.filter((r) => r.category === options.category);
      }
      if (options.type) {
        resources = resources.filter((r) => r.type === options.type);
      }

      return resources;
    },

    /**
     * Get a resource by ID
     * @param {string} id - Resource ID
     * @returns {Promise<Object>} Promise resolving to the resource or null
     */
    getById: async (id) => {
      await delay();
      const resources = getStorageData("resources") || [];
      return resources.find((r) => r.id === id) || null;
    },

    /**
     * Add a new resource
     * @param {Object} resource - Resource to add
     * @returns {Promise<Object>} Promise resolving to the added resource
     */
    add: async (resource) => {
      await delay();
      const resources = getStorageData("resources") || [];

      // Validate required fields
      if (
        !resource.id ||
        !resource.name ||
        !resource.lat ||
        !resource.lng ||
        !resource.type
      ) {
        throw new Error("Missing required fields: id, name, lat, lng, type");
      }

      // Check for duplicate ID
      if (resources.some((r) => r.id === resource.id)) {
        throw new Error(`Resource with ID ${resource.id} already exists`);
      }

      resources.push(resource);
      saveStorageData("resources", resources);
      return resource;
    },

    /**
     * Update a resource
     * @param {string} id - Resource ID
     * @param {Object} updates - Fields to update
     * @returns {Promise<Object>} Promise resolving to the updated resource
     */
    update: async (id, updates) => {
      await delay();
      const resources = getStorageData("resources") || [];
      const index = resources.findIndex((r) => r.id === id);

      if (index === -1) {
        throw new Error(`Resource with ID ${id} not found`);
      }

      // Apply updates
      resources[index] = { ...resources[index], ...updates };
      saveStorageData("resources", resources);
      return resources[index];
    },

    /**
     * Delete a resource
     * @param {string} id - Resource ID
     * @returns {Promise<boolean>} Promise resolving to success status
     */
    delete: async (id) => {
      await delay();
      const resources = getStorageData("resources") || [];
      const newResources = resources.filter((r) => r.id !== id);

      if (newResources.length === resources.length) {
        throw new Error(`Resource with ID ${id} not found`);
      }

      saveStorageData("resources", newResources);
      return true;
    },
  },

  // Gmina Operations
  gminas: {
    /**
     * Get all gminas
     * @returns {Promise<Object>} Promise resolving to gminas object
     */
    getAll: async () => {
      await delay();
      return getStorageData("gminas") || {};
    },

    /**
     * Get a gmina by ID
     * @param {string} id - Gmina ID
     * @returns {Promise<Object>} Promise resolving to the gmina or null
     */
    getById: async (id) => {
      await delay();
      const gminas = getStorageData("gminas") || {};
      return gminas[id] || null;
    },

    /**
     * Update a gmina
     * @param {string} id - Gmina ID
     * @param {Object} updates - Fields to update
     * @returns {Promise<Object>} Promise resolving to the updated gmina
     */
    update: async (id, updates) => {
      await delay();
      const gminas = getStorageData("gminas") || {};

      if (!gminas[id]) {
        throw new Error(`Gmina with ID ${id} not found`);
      }

      // Apply updates
      gminas[id] = { ...gminas[id], ...updates };
      saveStorageData("gminas", gminas);
      return gminas[id];
    },
  },

  // Demographic Operations
  demographic: {
    /**
     * Get demographic data
     * @returns {Promise<Object>} Promise resolving to demographic data
     */
    get: async () => {
      await delay();
      return getStorageData("demographic") || {};
    },

    /**
     * Update demographic data
     * @param {Object} updates - Fields to update
     * @returns {Promise<Object>} Promise resolving to the updated data
     */
    update: async (updates) => {
      await delay();
      const demographic = getStorageData("demographic") || {};
      const updatedData = { ...demographic, ...updates };
      saveStorageData("demographic", updatedData);
      return updatedData;
    },
  },

  // Reset all data to initial state
  reset: async () => {
    await delay();
    resetMockData();
    return { success: true, message: "Mock data reset to initial state" };
  },

  // Initialize storage on load
  init: () => {
    initializeMockStorage();
    console.log("Mock API initialized with localStorage persistence");
  },
};

// Create a comprehensive assistant knowledge base
function initializeAssistantKnowledge() {
  try {
    const demographic = getStorageData("demographic") || {};
    const gminas = getStorageData("gminas") || {};
    const resources = getStorageData("resources") || [];

    // Combine data into a comprehensive knowledge base
    const knowledgeBase = {
      demographic,
      gminas,
      resources,
      lastUpdated: new Date().toISOString(),
    };

    // Store in localStorage for the AI assistant to use
    saveStorageData("assistantKnowledge", knowledgeBase);
    console.log("AI Assistant knowledge base initialized");
  } catch (error) {
    console.error("Failed to initialize assistant knowledge:", error);
  }
}

// Initialize on load
mockAPI.init();

// Initialize AI assistant knowledge base after loading data
initializeAssistantKnowledge();

// Add event listener to synchronize knowledge when data changes
window.addEventListener("storage", (event) => {
  if (["demographic", "gminas", "resources"].includes(event.key)) {
    console.log(
      `Storage changed for ${event.key}, updating assistant knowledge`
    );
    initializeAssistantKnowledge();
  }
});

// Expose to global scope
window.mockAPI = mockAPI;

// Also expose the knowledge initializer for other modules to call
window.initializeAssistantKnowledge = initializeAssistantKnowledge;
