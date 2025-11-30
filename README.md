# portfolio-AI 🚀

A polished developer portfolio built with React, TypeScript and Vite — enhanced with an on-site AI assistant powered by Google's GenAI (Gemini).

## 🔎 What this project includes

- A modern single-page portfolio built with React + TypeScript and Vite
- Framer Motion animations and Tailwind-like utility classes for a smooth UI
- An AI chat assistant (`AIChatModal`) that uses the Google GenAI client for context-aware responses about the portfolio owner
- Sections: Hero, About, Skills, Experience, Education, Projects, Contact

## 🧰 Tech stack

- React 19 • TypeScript
- Vite (dev/build/preview scripts included)
- @google/genai (Gemini) — used in `services/geminiService.ts`
- Framer Motion, lucide-react for icons

## ⚡ Quick start

Requirements:

- Node.js 18+ and npm (or yarn)

1. Install dependencies

```powershell
npm install
```

2. Provide the AI API Key (Gemini / Google GenAI)

This project uses a client-side demo client that reads an environment variable called `API_KEY` (see `services/geminiService.ts`).

Create a `.env` file in the project root and add your key (example):

```powershell
# .env
API_KEY=YOUR_GOOGLE_GENAI_KEY
```

IMPORTANT: Storing sensitive API keys in client-side bundles is insecure for production. Use a small backend or proxy (serverless function) to keep your API key secret and to enforce rate-limits and usage controls. See the "Security" notes below.

3. Run locally

```powershell
npm run dev
# build for production
npm run build
# preview production build
npm run preview
```

Open your browser at http://localhost:5173/ (Vite default) to view the portfolio.

## 💬 AI assistant (how it works)

- The AI assistant is implemented in `components/AIChatModal.tsx` and calls the client in `services/geminiService.ts`.

## 🔐 Security recommendation

This repository intentionally demonstrates a client-side GenAI integration for a portfolio demo. However, client-side API keys can be easily extracted — do not ship real production API keys in a public client:

## 📦 Project structure (key files)

- `App.tsx` — main app and layout
- `components/AIChatModal.tsx` — AI chat UI and flow
- `services/geminiService.ts` — GenAI client usage and instructions
- `constants.ts` — profile, projects, and content used by the UI and the AI system prompt

## 🛠 Development / Contributing

Contributions are welcome — open an issue or PR. A simple workflow:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-change`
3. Make changes and commit
4. Push and open a pull request

## 📄 License

Licensed under the Apache 2.0 License — see the included `LICENSE` file.
