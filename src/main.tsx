import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter/opsz.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./styles/index.css";
import App from "./App.tsx";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// `npm run build` prerenders the page into #root (see scripts/prerender.mjs), so production
// hydrates that markup. In `npm run dev` the container starts empty and is rendered from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
