
  import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router";
  import { LanguageProvider } from "./i18n";
  import App from "./App.tsx";
  import "./index.css";
  import "./styles/globals.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  );
