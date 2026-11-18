# Ribhav Jain — Portfolio

Personal portfolio site: a single page with a hero, about, skills, an experience timeline,
education, projects, contact and a small offline "Ask AI" assistant. Light and dark themes.

## Stack

| Area    | Choice                                                               |
| ------- | -------------------------------------------------------------------- |
| UI      | React 19 + TypeScript                                                |
| Build   | Vite 8, with the page prerendered to static HTML at build time       |
| Styling | Plain CSS: design tokens plus one stylesheet per component           |
| Fonts   | Inter and JetBrains Mono, self-hosted through Fontsource             |
| Tooling | oxlint (lint), Prettier (format), `tsc` (type-check)                 |
| Runtime | No dependencies besides React. No API keys, no backend, no tracking. |

## Getting started

Requires Node.js 22.12 or newer.

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at http://localhost:3000.

| Command           | What it does                                                  |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload                          |
| `npm run build`   | Type-check, build to `dist/`, then prerender the page into it |
| `npm run preview` | Serve the production build locally                            |
| `npm run lint`    | Lint with oxlint                                              |
| `npm run format`  | Format with Prettier                                          |

## Project structure

```
index.html              Page shell: meta tags, structured data, theme bootstrap script
public/                 Files copied as-is (favicon, robots.txt, sitemap.xml, your CV)
scripts/prerender.mjs   Writes the rendered page into dist/index.html after the build
src/
  main.tsx              Browser entry
  entry-server.tsx      Build-time entry used by the prerender script
  App.tsx               Page layout: the order of the sections
  data/                 All site content (edit here, not in the components)
  components/           One file per section or widget, with its stylesheet beside it
  hooks/                Scroll reveal, scroll-spy and the sliding "lens" highlight
  lib/                  Small helpers: theme, assistant rules, class names
  styles/               Global CSS: tokens.css (colours, fonts), base.css, ui.css
```

## Editing content

| To change                                   | Edit                     |
| ------------------------------------------- | ------------------------ |
| Name, tagline, about text, email, CV, stats | `src/data/profile.ts`    |
| Social links                                | `src/data/profile.ts`    |
| Skills                                      | `src/data/skills.ts`     |
| Roles on the timeline                       | `src/data/experience.ts` |
| Education and certifications                | `src/data/education.ts`  |
| Projects                                    | `src/data/projects.ts`   |
| Ask AI answers                              | `src/lib/assistant.ts`   |
| Colours, fonts, dark theme                  | `src/styles/tokens.css`  |
| Page title, description, social preview     | `index.html`             |

### Download CV button

The button is hidden until a CV exists. Put the PDF in `public/` (for example
`public/Ribhav-Jain-CV.pdf`) and set `cvUrl: "/Ribhav-Jain-CV.pdf"` in `src/data/profile.ts`.

### Adding a project

Add an entry to `projects` in `src/data/projects.ts`. Each project picks one of the animated
covers defined in `src/components/ProjectCovers.tsx`; to draw a new one, add a component
there and its name to `CoverName`. Projects with an empty `links` list show no link.

## How it works

- **Prerendering.** `npm run build` renders the page to HTML and writes it into
  `dist/index.html`, so the content is there before any JavaScript loads. The browser then
  hydrates it. Components must therefore render the same on the server and the client: read
  `window`, `document` or `localStorage` only inside effects and event handlers.
- **Theme.** A short inline script in `index.html` sets `data-theme` on `<html>` before first
  paint (the saved choice, otherwise the system setting). The toggle lives in `src/lib/theme.ts`.
- **Motion.** The hero animates in with CSS alone. Content below the fold fades in on scroll
  (`useScrollReveal`): mark an element with `data-r`, and stagger siblings with
  `style={{ "--i": n }}`. All motion is switched off under `prefers-reduced-motion`.
- **Ask AI.** Answers come from keyword rules in `src/lib/assistant.ts` and run entirely in
  the browser. To connect a real model later, call it from a server-side function (for
  example a Vercel Function) and keep the API key there. Never ship a key in this bundle.

## Deployment

The build output is a static site in `dist/`. On Vercel, use the Vite preset with build
command `npm run build` and output directory `dist`.

The site URL (`https://ribhavjain.vercel.app/`) appears in `index.html` (canonical link,
Open Graph, structured data), `public/robots.txt` and `public/sitemap.xml`. Update all three
if the domain changes.

## License

See [LICENSE](LICENSE).
