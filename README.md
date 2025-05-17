# Civil42 Resource Monitoring System

This application provides a resource monitoring system for municipalities with AI assistant integration.

## Project Structure

- `backend/` - Express.js backend with OpenAI SDK integration
- `mocks/` - Mock API handlers and data for development and offline use
- `dist/` - Generated CSS files (Tailwind)
- Other root files - Frontend HTML, CSS, and JavaScript

## Setup Instructions

### 1. Frontend Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Build Tailwind CSS:

   ```
   npm run build:css
   ```

3. To watch for CSS changes during development:
   ```
   npm run watch:css
   ```

### 2. Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install backend dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:

   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   NODE_ENV=development
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000,http://localhost:5500
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

## Running the Application

### Development Mode

1. Start the backend server:

   ```
   cd backend && npm run dev
   ```

2. In a new terminal, serve the frontend with a local HTTP server:

   ```
   # Using Python (Python 3)
   python -m http.server 5500

   # OR using a Node.js server like http-server
   npx http-server -p 5500
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5500/resource-monitoring-home.html
   ```

### Configuration Options

The application can be configured through environment variables in `env-setup.js`:

- `API_ENABLED`: Set to "false" to use mock responses instead of the real API
- `BACKEND_URL`: URL of the backend server (default: http://localhost:3001)
- `AI_MODEL`: OpenAI model to use (default: gpt-4-turbo-preview)

## Offline Mode

The application can run in offline mode with mock data:

1. Open `env-setup.js` and set `API_ENABLED` to "false"
2. Open the HTML file directly in your browser (file:// protocol) or through a local server

## Troubleshooting

### Backend Connection Issues

If you see "Brak połączenia z backendem API" message:

1. Check if the backend server is running on port 3001
2. Verify your OpenAI API key in backend/.env
3. Check for any CORS issues in the browser console

### OpenAI API Issues

If the OpenAI API is not working:

1. Verify your API key is valid and has sufficient credits
2. Check if the model specified in env-setup.js is available to your account
3. Check the backend logs for any specific error messages

## License

ISC
