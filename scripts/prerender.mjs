// Runs after `vite build`. Renders <App /> to static HTML and writes it into dist/index.html,
// so the page has its full content before any JavaScript loads (search engines, link
// previews, slow connections). The browser then hydrates that markup: see src/main.tsx.
import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const SERVER_DIR = "dist-ssr";
const PAGE = resolve("dist/index.html");
const PLACEHOLDER = '<div id="root"></div>';

// Bundle the server entry so the same components (and asset URLs) are used as in the client build.
await build({
  logLevel: "warn",
  build: { ssr: "src/entry-server.tsx", outDir: SERVER_DIR, emptyOutDir: true },
});

try {
  const { render } = await import(pathToFileURL(resolve(SERVER_DIR, "entry-server.js")).href);
  const template = await readFile(PAGE, "utf8");
  if (!template.includes(PLACEHOLDER)) {
    throw new Error(`Could not find ${PLACEHOLDER} in dist/index.html`);
  }
  // A function replacement keeps "$" sequences in the markup from being read as patterns.
  await writeFile(
    PAGE,
    template.replace(PLACEHOLDER, () => `<div id="root">${render()}</div>`),
  );
  console.log("Prerendered dist/index.html");
} finally {
  await rm(SERVER_DIR, { recursive: true, force: true });
}
