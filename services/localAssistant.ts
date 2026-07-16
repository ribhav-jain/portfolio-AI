import {
  PROFILE,
  SKILL_CATEGORIES,
  EXPERIENCES,
  PROJECTS,
  EDUCATION,
  CERTIFICATIONS,
} from "../constants";

/**
 * Offline fallback assistant.
 * When no ANTHROPIC_API_KEY is configured (e.g. a static deploy), the chat uses
 * this simple keyword-intent responder instead of the live Claude API. Answers
 * are derived from constants.ts so they stay in sync with the rest of the site.
 */

interface Rule {
  keywords: string[];
  answer: () => string;
}

const has = (msg: string, kw: string) =>
  new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(msg);

const currentRole = EXPERIENCES[0];
const edu = EDUCATION[0];

// Rules are checked in order — put specific intents before general ones.
const RULES: Rule[] = [
  {
    keywords: ["hi", "hello", "hey", "yo", "greetings"],
    answer: () =>
      `Hi! I'm ${PROFILE.name}'s portfolio assistant. Ask me about his experience, AI & security work, projects, skills, or how to get in touch.`,
  },
  {
    keywords: ["thanks", "thank you", "thankyou", "cheers", "ty"],
    answer: () =>
      `Happy to help! Feel free to reach out to ${PROFILE.name} directly at ${PROFILE.email}.`,
  },
  {
    keywords: [
      "contact",
      "email",
      "hire",
      "hiring",
      "reach",
      "connect",
      "get in touch",
      "available",
      "opportunity",
    ],
    answer: () =>
      `You can reach ${PROFILE.name} at ${PROFILE.email}, or via the GitHub and LinkedIn links in the header and Contact section. He's open to new opportunities.`,
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: () =>
      `You can grab ${PROFILE.name}'s CV from the "Download CV" button in the hero section at the top of the page.`,
  },
  {
    keywords: ["agentic", "agent", "genai", "gen ai", "langgraph", "mcp", "llm", "rag"],
    answer: () =>
      `${PROFILE.name} is a Lead AI Engineer focused on agentic AI. He architected a production multi-agent platform using LangGraph orchestration and a governed MCP tool gateway (~45 IAM operations), now live across 5 enterprise tenants — with intent routing, tool-calling, RAG, and human-in-the-loop approvals.`,
  },
  {
    keywords: [
      "data science",
      "machine learning",
      "ml",
      "model",
      "tensorflow",
      "anomaly",
      "computer vision",
      "deep learning",
    ],
    answer: () =>
      `On the ML side, ${PROFILE.name} built Identity Intelligence — behavioral anomaly detection over physical-access events using TensorFlow LSTM autoencoders and HDBSCAN — which cut security breaches by 30%. His toolkit spans TensorFlow, scikit-learn, RAG, and computer vision.`,
  },
  {
    keywords: [
      "security",
      "iam",
      "identity",
      "sso",
      "saml",
      "oauth",
      "oidc",
      "auth",
      "mfa",
      "zero-trust",
      "zero trust",
    ],
    answer: () =>
      `${PROFILE.name} has deep identity & security experience: multi-tenant SSO with SAML 2.0, OIDC and OAuth, turning the product into a SAML Identity Provider, push-authentication MFA, and zero-trust multi-tenant design.`,
  },
  {
    keywords: [
      "scale",
      "scaling",
      "backend",
      "architecture",
      "microservice",
      "microservices",
      "pipeline",
      "infrastructure",
      "performance",
    ],
    answer: () =>
      `For scale, ${PROFILE.name} builds on FastAPI and Django (ASGI) with Postgres-checkpointed state, high-volume pipelines (Spring Batch + Quartz), and provider-agnostic LLM infrastructure with tracing and per-token cost analytics across AWS Bedrock and OpenAI.`,
  },
  {
    keywords: ["frontend", "front-end", "react", "full stack", "full-stack", "ui", "dashboard"],
    answer: () =>
      `${PROFILE.name} is a full-stack developer too — he built no-code, drag-and-drop analytics dashboards (React, D3, Plotly) adopted product-wide, plus an Entity Builder and Layout Designer that cut onboarding time 40%.`,
  },
  {
    keywords: ["project", "projects", "built", "build", "portfolio", "work", "showcase"],
    answer: () =>
      `A few highlights: ${PROJECTS.slice(0, 4)
        .map((p) => p.title)
        .join(", ")}, and more. Scroll to the Work section to explore them with tech stacks.`,
  },
  {
    keywords: ["skill", "skills", "stack", "tech", "technologies", "tools", "languages"],
    answer: () =>
      `${PROFILE.name} works across ${SKILL_CATEGORIES.map((c) => c.title).join(
        ", "
      )}. Highlights include LangGraph, MCP, RAG, TensorFlow, FastAPI, React, and SAML/OIDC/OAuth.`,
  },
  {
    keywords: ["experience", "career", "role", "roles", "job", "jobs", "background", "journey"],
    answer: () =>
      `${PROFILE.name} has 6+ years at ${currentRole.company}, progressing from Software Engineer I to ${currentRole.role} — spanning data pipelines, no-code tooling, ML-driven intelligence, enterprise SSO, and most recently agentic AI.`,
  },
  {
    keywords: ["education", "degree", "college", "university", "study", "studied", "school"],
    answer: () =>
      `${PROFILE.name} holds a ${edu.degree} from ${edu.school} (${edu.period}).`,
  },
  {
    keywords: ["certification", "certifications", "certificate", "cert", "certs", "course", "courses"],
    answer: () =>
      `Certifications include ${CERTIFICATIONS.slice(0, 4)
        .map((c) => c.name)
        .join(", ")}, and more.`,
  },
  {
    keywords: ["location", "based", "where", "live", "country", "city", "remote"],
    answer: () => `${PROFILE.name} is based in ${PROFILE.location}.`,
  },
  {
    keywords: ["who", "about", "yourself", "introduce", "summary", "bio"],
    answer: () => PROFILE.about,
  },
  {
    keywords: ["year", "years", "long", "old"],
    answer: () =>
      `${PROFILE.name} has 6+ years of professional experience, currently as ${currentRole.role} at ${currentRole.company}.`,
  },
];

const FALLBACK = () =>
  `Good question! I can share details on ${PROFILE.name}'s experience, AI & agentic work, security & identity, data science, projects, skills, education, or contact info — what would you like to know? For anything more specific, email him at ${PROFILE.email}.`;

export const answerLocally = (message: string): string => {
  const msg = message.toLowerCase().trim();
  for (const rule of RULES) {
    if (rule.keywords.some((kw) => has(msg, kw))) return rule.answer();
  }
  return FALLBACK();
};
