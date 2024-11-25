import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Création de la racine de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu principal de l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesure des performances (optionnel)
reportWebVitals();
