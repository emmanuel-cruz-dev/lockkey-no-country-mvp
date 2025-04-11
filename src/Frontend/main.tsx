import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ScrollToTop from "./hooks/useScrollToTop.ts";
import "./i18n/languages.ts";
import { DarkModeProvider } from "./providers/DarkModeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  </StrictMode>
);
