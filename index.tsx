
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Add error handling for runtime errors
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);
});

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App mounted successfully');
} catch (err) {
  console.error('Failed to render app:', err);
  rootElement.innerHTML = '<div style="padding: 20px; color: red; font-family: sans-serif;"><h1>Error Loading App</h1><p>' + String(err) + '</p></div>';
}
