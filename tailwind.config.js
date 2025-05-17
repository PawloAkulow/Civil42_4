/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resource-monitoring-home.html", "./script.js"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable preflight to avoid conflicts with existing styles
  },
};
