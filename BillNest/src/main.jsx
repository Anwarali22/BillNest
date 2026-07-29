// Import React Library
import React from "react";

// Import ReactDOM Library
import ReactDOM from "react-dom/client";

// Import our App Component
import App from "./App";

// Find the HTML element:
// <div id="root"></div>
const rootElement = document.getElementById("root");

// Create a React Root
const root = ReactDOM.createRoot(rootElement);

// Render the App Component
root.render(<App />);