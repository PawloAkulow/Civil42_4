/**
 * Mock Service for handling mock data in the Civil42 application
 * This module loads JSON mock data and provides functions to access and manipulate it
 */

// Import all mock data
const mockResources = require("./resources.json");
const gminaData = require("./gminas.json");
const demographicData = require("./demographic.json");

/**
 * Centralizes access to all mock data
 */
const mockData = {
  resources: mockResources,
  gminas: gminaData,
  demographic: demographicData,
};

/**
 * Gets mock data by type
 * @param {string} type - Type of data to retrieve (resources, gminas, demographic)
 * @returns {Object|Array} The requested mock data
 */
function getMockData(type) {
  return mockData[type];
}

/**
 * Utility for filtering resources by category
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered resources
 */
function getResourcesByCategory(category) {
  return mockResources.filter((resource) => resource.category === category);
}

/**
 * Gets a specific gmina by ID
 * @param {string} id - Gmina ID
 * @returns {Object} Gmina data
 */
function getGminaById(id) {
  return gminaData[id];
}

// Export functions for use in the application
module.exports = {
  getMockData,
  getResourcesByCategory,
  getGminaById,
};
