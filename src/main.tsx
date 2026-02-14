import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";
import { GlobalProvider } from "./contexts/globals.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </HelmetProvider>
  </StrictMode>
);
