import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/demand.css";
import "./i18n/i18n";
import App from "./App.tsx";
import { GlobalProvider } from "./contexts/globals.tsx";

const storedTheme = window.localStorage.getItem("sereel-theme");
const initialTheme = storedTheme === "dark" ? "dark" : "light";
document.documentElement.dataset.theme = initialTheme;
document.documentElement.style.colorScheme = initialTheme;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
);
