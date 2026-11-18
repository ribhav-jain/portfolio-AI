/**
 * The Ask AI panel's responder. It runs fully in the browser: a list of keyword rules,
 * checked in order, with a fallback. No model is called and no API key is involved.
 */
import { certifications, education } from "../data/education.ts";
import { profile } from "../data/profile.ts";
import { projects } from "../data/projects.ts";
import { skillGroups } from "../data/skills.ts";

const { name, email, company, role, location, cvUrl } = profile;
const firstName = name.split(" ")[0];

const titles = (items: { title: string }[], count = items.length) =>
  items
    .slice(0, count)
    .map((item) => item.title)
    .join(", ");

export const GREETING = `Hi! I'm ${firstName}'s portfolio assistant. Ask me about his experience, AI & security work, projects, or how to get in touch.`;

export const SUGGESTED_PROMPTS = [
  "What's your experience with Agentic AI?",
  "Tell me about your security work.",
  "What's your data science background?",
  "How do you approach scaling systems?",
];

const FALLBACK = `Good question! I can share details on ${name}'s experience, AI & agentic work, security & identity, data science, projects, skills, education, or contact info — what would you like to know? For anything more specific, email him at ${email}.`;

/** [keywords, reply]. The first rule with a keyword in the message wins, so order matters. */
const RULES: [keywords: string[], reply: string][] = [
  [
    ["hi", "hello", "hey", "yo", "greetings"],
    `Hi! I'm ${name}'s portfolio assistant. Ask me about his experience, AI & security work, projects, skills, or how to get in touch.`,
  ],
  [
    ["thanks", "thank you", "thankyou", "cheers", "ty"],
    `Happy to help! Feel free to reach out to ${name} directly at ${email}.`,
  ],
  [
    ["contact", "email", "hire", "hiring", "reach", "connect", "get in touch"],
    `You can reach ${name} at ${email}, or via the GitHub and LinkedIn links in the hero and Contact section.`,
  ],
  [
    ["resume", "cv", "download"],
    cvUrl
      ? `You can grab ${name}'s CV from the "Download CV" button in the hero section at the top of the page.`
      : `${name}'s CV isn't on the site yet. Email him at ${email} and he'll send it over.`,
  ],
  [
    ["agentic", "agent", "genai", "gen ai", "langgraph", "mcp", "llm", "rag"],
    `${name} is a ${role} focused on agentic AI. He architected a production multi-agent platform using LangGraph orchestration and a governed MCP tool gateway (~45 IAM operations), now live across 5 enterprise tenants — with intent routing, tool-calling, RAG, and human-in-the-loop approvals.`,
  ],
  [
    [
      "data science",
      "machine learning",
      "ml",
      "model",
      "tensorflow",
      "anomaly",
      "computer vision",
      "deep learning",
    ],
    `On the ML side, ${name} built Identity Intelligence — behavioral anomaly detection over physical-access events using TensorFlow LSTM autoencoders and HDBSCAN — which cut security breaches by 30%. His toolkit spans TensorFlow, scikit-learn, RAG, and computer vision.`,
  ],
  [
    [
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
    `${name} has deep identity & security experience: multi-tenant SSO with SAML 2.0, OIDC and OAuth, turning the product into a SAML Identity Provider, push-authentication MFA, and zero-trust multi-tenant design.`,
  ],
  [
    [
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
    `For scale, ${name} builds on FastAPI and Django (ASGI) with Postgres-checkpointed state, high-volume pipelines (Spring Batch + Quartz), and provider-agnostic LLM infrastructure with tracing and per-token cost analytics across AWS Bedrock and OpenAI.`,
  ],
  [
    ["frontend", "front-end", "react", "full stack", "full-stack", "ui", "dashboard"],
    `${name} is a full-stack developer too — he built no-code, drag-and-drop analytics dashboards (React, D3, Plotly) adopted product-wide, plus an Entity Builder and Layout Designer that cut onboarding time 40%.`,
  ],
  [
    ["project", "projects", "built", "build", "portfolio", "work", "showcase"],
    `A few highlights: ${titles(projects, 4)}, and more. Scroll to the Featured projects section to explore them with tech stacks.`,
  ],
  [
    ["skill", "skills", "stack", "tech", "technologies", "tools", "languages"],
    `${name} works across ${titles(skillGroups.slice(0, -1))}, and ${skillGroups.at(-1)?.title}. Highlights include LangGraph, MCP, RAG, TensorFlow, FastAPI, React, and SAML/OIDC/OAuth.`,
  ],
  [
    ["experience", "career", "role", "roles", "job", "jobs", "background", "journey"],
    `${name} has 6+ years at ${company}, progressing from Software Engineer I to ${role} — spanning data pipelines, no-code tooling, ML-driven intelligence, enterprise SSO, and most recently agentic AI.`,
  ],
  [
    ["education", "degree", "college", "university", "study", "studied", "school"],
    `${name} holds a ${education.degree} from ${education.school} (${education.period}).`,
  ],
  [
    ["certification", "certifications", "certificate", "cert", "certs", "course", "courses"],
    `Certifications include ${titles(certifications, 4)}, and more.`,
  ],
  [
    ["location", "based", "where", "live", "country", "city", "remote"],
    `${name} is based in ${location}.`,
  ],
  [
    ["who", "about", "yourself", "introduce", "summary", "bio"],
    "I'm a Lead AI Engineer with 6+ years spanning AI, full-stack development, and data science. I specialize in the 'missing middle' of AI — turning experimental models into production systems — while building scalable backends and secure identity platforms.",
  ],
  [
    ["year", "years", "long", "old"],
    `${name} has 6+ years of professional experience, currently as ${role} at ${company}.`,
  ],
];

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const MATCHERS = RULES.map(([keywords, reply]) => ({
  pattern: new RegExp(`\\b(?:${keywords.map(escapeRegExp).join("|")})\\b`, "i"),
  reply,
}));

export function answer(message: string): string {
  return MATCHERS.find(({ pattern }) => pattern.test(message))?.reply ?? FALLBACK;
}
