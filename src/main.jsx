import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Remove duplicate root creation
const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Move loader logic to after render
document.addEventListener("DOMContentLoaded", () => {
  // Hide loader once React app is mounted
  const loader = document.getElementById("loader");
  if (loader) {
    // Add a small delay to ensure app is rendered
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});