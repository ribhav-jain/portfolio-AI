import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  // The assistant key can be provided as ANTHROPIC_API_KEY or VITE_ANTHROPIC_API_KEY.
  // NOTE: this is a client-side demo build, so the key ships in the bundle.
  // For anything public, proxy the Anthropic call through a small backend
  // (serverless function) instead of exposing the key. See README "Security".
  const anthropicKey = env.ANTHROPIC_API_KEY || env.VITE_ANTHROPIC_API_KEY || "";
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react(), tailwindcss()],
    define: {
      "process.env.ANTHROPIC_API_KEY": JSON.stringify(anthropicKey),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
