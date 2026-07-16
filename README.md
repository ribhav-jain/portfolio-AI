# Ribhav Jain — Portfolio AI 🚀

A polished developer portfolio built with **React 19 + TypeScript + Vite 7 + Tailwind CSS v4**, with an on-site AI assistant powered by **Anthropic's Claude**.

## 🔎 What's inside

- Single-page portfolio: Hero, About, Skills, Experience, Education, Projects, Contact
- Framer Motion animations, a runtime accent-color theme picker, and generative SVG art (no heavy image payloads)
- An AI chat assistant (`AIChatModal`) that streams context-aware answers about the portfolio owner using the Claude API

## 🧰 Tech stack

- React 19 · TypeScript
- Vite 7 (dev/build/preview)
- Tailwind CSS v4 (via `@tailwindcss/vite` — no CDN, fully bundled)
- `@anthropic-ai/sdk` (Claude) — see `services/anthropicService.ts`
- Framer Motion · lucide-react

## ⚡ Quick start

Requirements: Node.js 18+ and npm.

1. Install dependencies

```powershell
npm install
```

2. Provide the AI API key (optional — the site works without it; the assistant just shows a "not configured" message)

Create a `.env` file in the project root (see `.env.example`):

```
ANTHROPIC_API_KEY=sk-ant-...
```

3. Run

```powershell
npm run dev       # dev server at http://localhost:3000
npm run build     # production build
npm run preview   # preview the production build
npm run typecheck # tsc --noEmit
```

## 💬 AI assistant

- UI: `components/AIChatModal.tsx` (streams tokens as they arrive)
- Client: `services/anthropicService.ts` — builds the system prompt from `constants.ts` and calls Claude (default model: **Claude Opus 4.8**; swap to `claude-haiku-4-5` in that file for a cheaper/faster FAQ bot)

## 🔐 Security note (read before deploying)

This build calls the Claude API **directly from the browser** (`dangerouslyAllowBrowser: true`), which means the API key is embedded in the shipped bundle. That's fine for a local demo but **insecure for a public deployment** — a client-side key can be extracted and abused.

For production, proxy the request through a small backend / serverless function that:

- holds `ANTHROPIC_API_KEY` server-side (never shipped to the client),
- enforces rate limits and usage caps.

Then point `anthropicService.ts` at your proxy endpoint instead of instantiating the SDK in the browser.

## 🧩 Personalize

- `constants.ts` — profile, skills, experience, projects, certifications, metrics (single source of truth for both the UI and the assistant's knowledge)
- `PROFILE.resumeUrl` → drop your PDF at `public/Ribhav-Jain-CV.pdf` to wire up the "Download CV" button
- Accent themes live in `components/ThemePicker.tsx`; base colors/fonts in `index.css` (`@theme`)

## 📦 Key files

- `App.tsx` — layout
- `index.css` — Tailwind v4 theme + design tokens
- `components/` — section components + `AIChatModal`
- `services/anthropicService.ts` — Claude integration

## 📄 License

Apache 2.0 — see `LICENSE`.
