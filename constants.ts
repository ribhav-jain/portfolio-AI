import {
  Experience,
  Project,
  SkillCategory,
  Education,
  Certification,
  Metric,
} from "./types";

export const PROFILE = {
  name: "Ribhav Jain",
  role: "Lead AI Engineer",
  tagline: "Building the future of logic.",
  shortBio:
    "Lead AI Engineer and full-stack developer — I build agentic AI, scalable backends, and the secure identity platforms they run on.",
  about:
    "I'm a Senior AI Engineer with 6+ years spanning AI, full-stack development, and data science. I specialize in the 'missing middle' of AI — turning experimental models into production systems — while building scalable backends (FastAPI, Django, Spring) and secure identity platforms (SAML, OIDC, OAuth). Most recently I architected a production agentic AI platform on multi-agent LangGraph orchestration and governed MCP tooling, and lead the team that delivers it.",
  location: "India",
  email: "ribhavjain4@gmail.com",
  // Drop your PDF at public/Ribhav-Jain-CV.pdf to wire up the "Download CV" button.
  resumeUrl: "/Ribhav-Jain-CV.pdf",
  socials: {
    github: "https://github.com/ribhav-jain",
    linkedin: "https://www.linkedin.com/in/ribhav-jain",
    hackerrank: "https://www.hackerrank.com/profile/ribhavjain1",
    kaggle: "https://www.kaggle.com/RibhavJain",
  },
};

export const METRICS: Metric[] = [
  { value: "6+", label: "Years building" },
  { value: "5", label: "Enterprise tenants live" },
  { value: "30%", label: "Fewer security breaches" },
  { value: "40%", label: "Faster onboarding" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "GenAI & Agents",
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

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Lead AI Engineer",
    company: "Alert Enterprise",
    period: "Apr 2025 – Present",
    description:
      "Architected and lead delivery of a production agentic AI platform — orchestration service plus a MCP tool gateway.",
    highlights: [
      "Built a reusable MCP tool gateway and a resilient LangGraph multi-agent engine with a RAG advisor.",
      "Designed a zero-trust, multi-tenant model with human-in-the-loop approval, and lead a team across AI and platform workstreams.",
    ],
    technologies: ["LangGraph", "MCP", "FastAPI", "AWS Bedrock"],
  },
  {
    id: "exp2",
    role: "Software Engineer III",
    company: "Alert Enterprise",
    period: "2024 – Mar 2025",
    description: "Delivered GenAI and enterprise identity across the security suite.",
    highlights: [
      "Shipped Identity Intelligence — LSTM-autoencoder + HDBSCAN anomaly detection over physical-access events — cutting security breaches 30%.",
      "Built multi-tenant SSO (SAML 2.0, OIDC, OAuth), turned the product into a SAML Identity Provider, and added a GenAI natural-language rule engine.",
    ],
    technologies: ["TensorFlow", "SAML 2.0", "OIDC", "GenAI"],
  },
  {
    id: "exp3",
    role: "Software Engineer II",
    company: "Alert Enterprise",
    period: "2023 – 2024",
    description: "Built ML-driven monitoring and no-code tooling adopted product-wide.",
    highlights: [
      "Created Device Intelligence (false-alarm reduction, predictive maintenance) and a no-code drag-and-drop analytics platform (D3, Plotly).",
      "Shipped an Entity Builder and Layout Designer that cut customer onboarding time 40%.",
    ],
    technologies: ["React", "D3", "Anomaly Detection"],
  },
  {
    id: "exp4",
    role: "Software Engineer I",
    company: "Alert Enterprise",
    period: "2020 – 2023",
    description:
      "Engineered high-volume data pipelines and access-provisioning foundations.",
    highlights: [
      "Built a fault-tolerant event-reconciliation pipeline (Spring Batch + Quartz) for high-volume PACS events, plus self-service access provisioning across Lenel, CCURE & AMAG.",
    ],
    technologies: ["Java", "Spring Batch", "PostgreSQL"],
  },
  {
    id: "exp5",
    role: "Data Scientist Intern",
    company: "TCIL-IT",
    period: "2019",
    description:
      "Developed a secure facial-recognition login system integrating computer-vision models with a React and Flask full-stack architecture.",
    technologies: ["Computer Vision", "Flask", "React", "Python"],
  },
  {
    id: "exp6",
    role: "Software Developer Intern",
    company: "Infowiz",
    period: "2018",
    description:
      "Created a dashboard of charts and visualizations for login activity and compliance.",
    technologies: ["D3.js", "Dashboards", "JavaScript", "APIs"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p2",
    title: "Face Recognition Login",
    description:
      "A robust biometric authentication system eliminating passwords. Uses deep learning for facial embedding and liveness detection to ensure high-security access control.",
    technologies: ["OpenCV", "Face Recognition", "TensorFlow", "Django", "WebSockets"],
    image: "/images/face-recognition.jpg",
    category: "Security",
  },
  {
    id: "p1",
    title: "AI Knowledge Base & FAQ",
    description:
      "A RAG-powered knowledge engine. Users upload documents (PDF/Docs), and the system indexes them to provide precise, citation-backed answers to natural language queries.",
    technologies: ["LangChain", "LangGraph", "FAISS", "OpenAI", "React"],
    image: "/images/rag.jpg",
    category: "AI/ML",
  },
  {
    id: "p6",
    title: "Lightweight API Gateway",
    description:
      "A high-performance Node.js proxy server managing microservices traffic. Features dynamic routing, rate limiting, and JWT-based authentication middleware.",
    technologies: ["Node.js", "Redis", "Express", "JWT"],
    image: "/images/api.jpg",
    category: "Full Stack",
  },
  {
    id: "p3",
    title: "AI Personal Finance",
    description:
      "A smart financial advisor that aggregates transaction data, classifies spending habits using NLP, and forecasts budgets with time-series forecasting models.",
    technologies: ["LSTM", "Pandas", "React", "Python"],
    image: "/images/finance.jpg",
    category: "AI/ML",
  },
  {
    id: "p5",
    title: "Smart Inbox Classifier",
    description:
      "An intelligent email sorter using Scikit-Learn. Automatically categorizes incoming messages into 'Action Required', 'Social', and 'Updates' to declutter inboxes.",
    technologies: ["Scikit-Learn", "Gmail API", "NLP", "Docker", "Python"],
    image: "/images/mail.jpg",
    category: "AI/ML",
  },
  {
    id: "p4",
    title: "Voice Command Assistant",
    description:
      "A hands-free desktop automation tool. Executes system commands, web searches, and application control through intuitive voice directives and NLP.",
    technologies: ["NLP", "Speech Recognition", "Python", "Automation"],
    image: "/images/voice-assistant.jpg",
    category: "AI/ML",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.E. — Computer Science & Engineering",
    school: "UIET, Panjab University, Chandigarh",
    period: "2016 – 2020",
    details:
      "Focused on core Computer Science fundamentals along with advanced AI and engineering disciplines, including Deep Learning, Data Science, and Full-Stack Development.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning & AI",
      "Neural Networks",
      "Web Development",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Hugging Face AI Agents", issuer: "Hugging Face" },
  { name: "Neural Networks & Deep Learning", issuer: "Andrew Ng" },
  { name: "Machine Learning", issuer: "Kirill Eremenko (Udemy)" },
  { name: "Data Science", issuer: "Jose Portilla" },
  { name: "Big Data Specialization", issuer: "Coursera" },
  { name: "Spring & Hibernate", issuer: "Chad Darby" },
];
