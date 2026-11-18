import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

/** Renders the page to an HTML string. Used at build time only, by scripts/prerender.mjs. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
