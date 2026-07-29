import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.scss";

createRoot(document.getElementById("root")).render(
    // Crée une racine React pour la page et affiche le composant App
    <StrictMode>
        <App />
    </StrictMode>,
);
