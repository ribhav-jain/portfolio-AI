export interface Role {
  period: string;
  title: string;
  company: string;
  summary: string;
  highlights: string[];
  tags: string[];
  /** Marks the role held today. */
  current?: boolean;
  /** Headline result shown beside the role; `chart` adds the illustrative anomaly sparkline. */
  metric?: { value: string; label: string; chart?: boolean };
  /** Interactive panel shown beside the role instead of a metric. */
  demo?: "agent-run";
}

/** Newest first. */
export const roles: Role[] = [
  {
    period: "Apr 2025 – Present",
    title: "Lead AI Engineer",
    company: "Alert Enterprise",
    current: true,
    summary:
      "Architected and lead delivery of a production agentic AI platform — orchestration service plus a MCP tool gateway, live across 5 enterprise tenants.",
    highlights: [
      "Built a reusable MCP tool gateway and a resilient LangGraph multi-agent engine with a RAG advisor.",
      "Designed a zero-trust, multi-tenant model with human-in-the-loop approval, and lead a team across AI and platform workstreams.",
    ],
    tags: ["LangGraph", "MCP", "FastAPI", "AWS Bedrock"],
    demo: "agent-run",
  },
  {
    period: "2024 – Mar 2025",
    title: "Software Engineer III",
    company: "Alert Enterprise",
    summary: "Delivered GenAI and enterprise identity across the security suite.",
    highlights: [
      "Shipped Identity Intelligence — LSTM-autoencoder + HDBSCAN anomaly detection over physical-access events — cutting security breaches 30%.",
      "Built multi-tenant SSO (SAML 2.0, OIDC, OAuth), turned the product into a SAML Identity Provider, and added a GenAI natural-language rule engine.",
    ],
    tags: ["TensorFlow", "SAML 2.0", "OIDC", "GenAI"],
    metric: { value: "30%", label: "fewer security breaches", chart: true },
  },
  {
    period: "2023 – 2024",
    title: "Software Engineer II",
    company: "Alert Enterprise",
    summary: "Built ML-driven monitoring and no-code tooling adopted product-wide.",
    highlights: [
      "Created Device Intelligence (false-alarm reduction, predictive maintenance) and a no-code drag-and-drop analytics platform (D3, Plotly).",
      "Shipped an Entity Builder and Layout Designer that cut customer onboarding time 40%.",
    ],
    tags: ["React", "D3", "Anomaly Detection"],
    metric: { value: "40%", label: "faster customer onboarding" },
  },
  {
    period: "2020 – 2023",
    title: "Software Engineer I",
    company: "Alert Enterprise",
    summary: "Engineered high-volume data pipelines and access-provisioning foundations.",
    highlights: [
      "Built a fault-tolerant event-reconciliation pipeline (Spring Batch + Quartz) for high-volume PACS events, plus self-service access provisioning across Lenel, CCURE & AMAG.",
    ],
    tags: ["Java", "Spring Batch", "PostgreSQL"],
  },
  {
    period: "2019",
    title: "Data Scientist Intern",
    company: "TCIL-IT",
    summary:
      "Developed a secure facial-recognition login system integrating computer-vision models with a React and Flask full-stack architecture.",
    highlights: [],
    tags: ["Computer Vision", "Flask", "React", "Python"],
  },
  {
    period: "2018",
    title: "Software Developer Intern",
    company: "Infowiz",
    summary: "Created a dashboard of charts and visualizations for login activity and compliance.",
    highlights: [],
    tags: ["D3.js", "Dashboards", "JavaScript", "APIs"],
  },
];
