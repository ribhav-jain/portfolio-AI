export type ProjectCategory = "ai" | "security" | "fullstack";

/** Animated cover illustrations, defined in components/ProjectCovers.tsx. */
export type CoverName =
  "radar" | "arcade" | "faceScan" | "documents" | "gateway" | "finance" | "inbox" | "voice";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  cover: CoverName;
  /** The first link is also used for the cover. Leave empty for projects without a public link. */
  links: { label: string; href: string }[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  ai: "AI/ML",
  security: "Security",
  fullstack: "Full Stack",
};

export const projects: Project[] = [
  {
    title: "docsonar",
    category: "ai",
    description:
      "A local document search MCP server. It indexes folders into a single SQLite database and gives any MCP client hybrid keyword and semantic search: fully offline, zero configuration, read-only by design.",
    tags: ["MCP server", "Python", "SQLite", "PyPI"],
    cover: "radar",
    links: [
      { label: "Repository", href: "https://github.com/ribhav-jain/docsonar" },
      { label: "PyPI", href: "https://pypi.org/project/docsonar/" },
    ],
  },
  {
    title: "pocketcade",
    category: "fullstack",
    description:
      "Fifteen original browser games behind one shared game contract. A static site with no ads or tracking; CI fails if a page or game outgrows its size budget.",
    tags: ["TypeScript", "Next.js", "Phaser", "Playwright"],
    cover: "arcade",
    links: [
      { label: "Live", href: "https://pocketcade.vercel.app" },
      { label: "Repository", href: "https://github.com/ribhav-jain/pocketcade" },
    ],
  },
  {
    title: "Face Recognition Login",
    category: "security",
    description:
      "A biometric-first login demo: face recognition from the device camera alongside password login, with an activity log, a security dashboard and an AI-written daily security briefing.",
    tags: ["React", "TypeScript", "Gemini API"],
    cover: "faceScan",
    links: [
      { label: "Live", href: "https://visionauth.vercel.app" },
      { label: "Repository", href: "https://github.com/ribhav-jain/vision-auth" },
    ],
  },
  {
    title: "AI Knowledge Base & FAQ",
    category: "ai",
    description:
      "A RAG-powered knowledge engine. Users upload documents (PDF, DOCX or TXT), and the system indexes them into pgvector to provide precise, citation-backed answers to natural language queries.",
    tags: ["React", "Express", "pgvector", "Drizzle ORM"],
    cover: "documents",
    links: [
      { label: "Live", href: "https://docbrain.vercel.app" },
      { label: "Repository", href: "https://github.com/ribhav-jain/doc-brain" },
    ],
  },
  {
    title: "Lightweight API Gateway",
    category: "fullstack",
    description:
      "A small Node.js proxy server that forwards API calls to a configurable HTTP or HTTPS target, serves static files and handles CORS.",
    tags: ["Node.js", "Express"],
    cover: "gateway",
    links: [{ label: "Repository", href: "https://github.com/ribhav-jain/api-gateway" }],
  },
  {
    title: "AI Personal Finance",
    category: "ai",
    description:
      "A personal finance dashboard with AI-categorised transactions, budgets, saving goals and an Ask-AI chat, with fallback logic for when the model is unavailable.",
    tags: ["React 19", "TypeScript", "Gemini API"],
    cover: "finance",
    links: [
      { label: "Live", href: "https://financeassistant.vercel.app" },
      { label: "Repository", href: "https://github.com/ribhav-jain/finance-assistant" },
    ],
  },
  {
    title: "Smart Inbox Classifier",
    category: "ai",
    description:
      "An intelligent email sorter using Scikit-Learn. Automatically categorizes incoming messages into 'Action Required', 'Social', and 'Updates' to declutter inboxes.",
    tags: ["Scikit-Learn", "Gmail API", "NLP", "Docker", "Python"],
    cover: "inbox",
    links: [],
  },
  {
    title: "Voice Command Assistant",
    category: "ai",
    description:
      "A hands-free desktop automation tool. Executes system commands, web searches, and application control through intuitive voice directives and NLP.",
    tags: ["NLP", "Speech Recognition", "Python", "Automation"],
    cover: "voice",
    links: [],
  },
];
