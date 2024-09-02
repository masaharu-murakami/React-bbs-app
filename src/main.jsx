import React from "react";
import { createRoot } from "react-dom/client";  // {} を使ってインポート
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);