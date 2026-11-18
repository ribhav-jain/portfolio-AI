import type { IconName } from "../components/Icon.tsx";
import type { Tone } from "../lib/tone.ts";

export interface SkillGroup {
  title: string;
  icon: IconName;
  tone: Tone;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "GenAI & Agents",
    icon: "bot",
    tone: 1,
    skills: [
      "LangGraph",
      "LangChain",
      "MCP (server & client)",
      "RAG",
      "Function Calling",
      "Structured Outputs",
      "Guardrails",
      "Human-in-the-Loop",
      "LoRA / PEFT",
    ],
  },
  {
    title: "LLMs, RAG & Vector",
    icon: "db",
    tone: 5,
    skills: [
      "GPT",
      "Claude",
      "Llama",
      "AWS Bedrock",
      "OpenAI",
      "Embeddings",
      "Semantic Search",
      "Qdrant",
      "FAISS",
      "pgvector",
    ],
  },
  {
    title: "LLMOps & Evaluation",
    icon: "pulse",
    tone: 4,
    skills: [
      "LangSmith",
      "Tracing & Observability",
      "Cost Optimization",
      "Prompt / Model Versioning",
      "LLM-as-a-Judge",
      "Eval Harnesses",
    ],
  },
  {
    title: "Machine Learning",
    icon: "brain",
    tone: 3,
    skills: [
      "TensorFlow",
      "LSTM Autoencoders",
      "scikit-learn",
      "HDBSCAN",
      "Anomaly Detection",
      "Computer Vision (U2Net)",
    ],
  },
  {
    title: "Full-Stack & Languages",
    icon: "server",
    tone: 1,
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "React",
      "Next.js",
      "FastAPI",
      "Django (ASGI)",
      "Spring Batch",
      "Ext JS",
    ],
  },
  {
    title: "Data, DevOps & Security",
    icon: "shield",
    tone: 2,
    skills: [
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "SAML 2.0 / OIDC / OAuth 2.0",
      "Zero-Trust",
      "Multi-Tenancy",
    ],
  },
];
