# Civil42 Mock Data System

This directory contains mock data and services used for development and testing of the Civil42 resource monitoring application.

## Overview

The mock data system provides a consistent way to simulate real data sources during development without requiring a real backend. It includes:

- JSON data files containing static mock data
- JavaScript modules that load and serve this data
- Service modules that simulate API requests and responses
- AI assistant simulation with realistic interactions

## Directory Structure

- `resources.json` - Mock resource data (emergency services, storage facilities, etc.)
- `gminas.json` - Municipality (gmina) data including their locations and resources
- `demographic.json` - Demographic statistics and population data
- `mockData.js` - Consolidated data file that combines all mock data into a single object
- `mockAPI.js` - Simulated backend API with CRUD operations and localStorage persistence
- `mockAI.js` - Simulated AI assistant with conversations, suggestions and analysis
- `mockService.js` - Utility functions for accessing and manipulating mock data

## Usage

### Basic Usage

The mock data is loaded automatically when the application starts. The HTML file includes these scripts:

```html
<script src="mocks/mockData.js"></script>
<script src="mocks/mockAPI.js"></script>
<script src="mocks/mockAI.js"></script>
```

### Accessing Mock Data

You can access the mock data directly via the global `mockData` object:

```javascript
// Access resources data
const resources = mockData.resources;

// Access gmina data
const gminas = mockData.gminas;
const belchatowGmina = mockData.gminas.gminaA;

// Access demographic data
const demographicStats = mockData.demographic;
```

### Using the Mock API

The mock API simulates a backend server with CRUD operations:

```javascript
// Get all resources
mockAPI.resources.getAll().then((resources) => {
  console.log(resources);
});

// Get resources filtered by category
mockAPI.resources.getAll({ category: "consumer_food" }).then((resources) => {
  console.log(resources);
});

// Add a new resource
const newResource = {
  id: "new-resource-1",
  name: "Nowy Magazyn",
  lat: 51.38,
  lng: 19.39,
  type: "storage",
  category: "consumer_food",
};

mockAPI.resources.add(newResource).then((createdResource) => {
  console.log("Created resource:", createdResource);
});

// Update a resource
mockAPI.resources
  .update("m1", { name: "Magazyn A1 (Zmodyfikowany)" })
  .then((updatedResource) => {
    console.log("Updated resource:", updatedResource);
  });

// Delete a resource
mockAPI.resources.delete("m1").then((success) => {
  console.log("Resource deleted:", success);
});

// Reset all data to initial state
mockAPI.reset().then((result) => {
  console.log("Data reset:", result);
});
```

### Using the Mock AI

The mock AI simulates an AI assistant with conversations, suggestions, and analysis:

```javascript
// Get AI suggestions based on context
mockAI
  .getSuggestions({
    type: "resources",
    resourceName: "Magazyn A1",
    resourceType: "consumer_food",
  })
  .then((suggestions) => {
    console.log("AI Suggestions:", suggestions);
  });

// Get an analysis plan for a specific scenario
mockAI.getAnalysisPlan("waterShortage").then((plan) => {
  console.log("Analysis Plan:", plan);
});

// Get conversation history
mockAI.getConversationLog().then((log) => {
  console.log("Conversation History:", log);
});

// Send a message and get a response
mockAI
  .getResponse("Jakie są zalecenia odnośnie zapasów wody?")
  .then((response) => {
    console.log("AI Response:", response);
  });

// Simulate crisis alert detection
mockAI.detectCrisis().then((hasCrisis) => {
  console.log("Crisis detected:", hasCrisis);
});
```

## Data Persistence

The mock API uses `localStorage` to persist changes to the data between page reloads. This allows you to simulate a real database during development. To reset the data to its initial state, call `mockAPI.reset()`.

## Extending the Mock Data

### Adding New Resources

To add new mock resources, edit the `resources.json` file or add them through the mock API:

```javascript
mockAPI.resources
  .add({
    id: "new-resource-id",
    name: "New Resource Name",
    lat: 51.123,
    lng: 19.456,
    type: "storage",
    category: "medical",
  })
  .then((resource) => {
    console.log("Added new resource:", resource);
  });
```

### Adding New Gminas

To add new municipalities (gminas), edit the `gminas.json` file with the new gmina data.

### Modifying AI Behavior

To modify the AI assistant's behavior, edit the templates and response patterns in `mockAI.js`:

- `suggestionTemplates` - Contains templates for different types of suggestions
- `analysisPlans` - Contains analysis plans for different scenarios
- `conversationTemplates` - Contains template conversations

## Troubleshooting

If you encounter issues with the mock data system:

1. Check the browser console for errors
2. Verify that all mock files are being loaded correctly
3. Try resetting the data with `mockAPI.reset()`
4. Clear localStorage if you suspect corrupted data: `localStorage.clear()`
