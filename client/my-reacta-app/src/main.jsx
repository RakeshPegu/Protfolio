import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.scss';
import { AuthContextProvider } from './context/authProvider.jsx';

// Ensure `root` is the ID of an existing element in your HTML
const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <AuthContextProvider>
                <App />
             
            </AuthContextProvider>
        </React.StrictMode>
    );
} else {
    console.error('Root element not found');
}
