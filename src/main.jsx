
import './index.css'

// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { DataProvider } from './context/DataContext';

const root = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
