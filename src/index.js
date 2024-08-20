import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <TitleAndFaviconProvider>
      <App />
    </TitleAndFaviconProvider>
  </React.StrictMode>
);

// Component to manage the title and favicon dynamically
function TitleAndFaviconProvider({ children }) {
  useEffect(() => {
    // Set the title
    document.title = 'Ravenous';

    // Set the favicon
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.href = '/src/assets/images/logo_white.png'; // or the path to your specific favicon
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.id = 'favicon';
      newFavicon.rel = 'icon';
      newFavicon.href = '/src/assets/images/logo_white.png'; // or the path to your specific favicon
      document.head.appendChild(newFavicon);
    }
  }, []);

  return children;
}
