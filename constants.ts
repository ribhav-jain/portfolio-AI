import {
  Experience,
  Project,
  SkillCategory,
  Education,
  Certification,
} from "./types";

export const PROFILE = {
  name: "Ribhav Jain",
  role: "Software Developer & Data Scientist",
  shortBio:
    "Building AI-driven applications, scalable architectures, and intelligent IAM systems.",
  about:
    "I am a Senior Software Developer & Data Scientist with 5+ years of experience. My expertise lies in the 'missing middle' of AI development—scaling experimental models into production-grade applications. I specialize in building robust AI-driven applications, scalable backend architectures (Django, Spring), and full-stack systems with secure IAM integrations (OAuth2, SAML, OIDC).",
  location: "India",
  email: "ribhavjain4@gmail.com",
  socials: {
    github: "https://github.com/ribhav-jain",
    linkedin: "https://www.linkedin.com/in/ribhav-jain",
    twitter: "https://twitter.com",
    hackerrank: "https://www.hackerrank.com/profile/ribhavjain1",
    kaggle: "https://www.kaggle.com/RibhavJain",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Science & AI",
    skills: [
      "TensorFlow",
      "Keras",
      "LLM",
      "RAG",
      "Scikit-Learn",
      "NLP",
      "Time Series Analysis",
      "Pandas",
      "NumPy",
      "Power BI",
      "Python",
    ],
  },
  {
    title: "Backend & IAM",
    skills: [
      "Django",
      "Flask",
      "Spring",
      "Play Framework",
      "OAuth2",
      "SAML",
      "Spring Batch",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "Next.js",
      "React",
      "Ext JS",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Responsive Dashboards",
      "Tailwind CSS",
      "NPM/Yarn",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Software Engineer III",
    company: "Alert Enterprise",
    period: "2024 - Present",
    description:
      "Spearheaded the development of an AI-powered agentic chatbot and Identity Intelligence system. Designed multi-tenant SSO architectures supporting SAML, OAuth, and OIDC. Reduced security breaches by 30% through insider threat detection models.",
    technologies: ["AI Agents", "SAML/OIDC", "Spring", "Python", "RBAC"],
  },
  {
    id: "exp2",
    role: "Software Engineer II",
    company: "Alert Enterprise",
    period: "2023 - 2024",
    description:
      "Accelerated onboarding by 40% with a custom Entity Builder framework. Designed a drag-and-drop Layout Designer and developed Device Intelligence modules for anomaly detection and predictive maintenance.",
    technologies: [
      "Predictive Maintenance",
      "Layout Designer",
      "Anomaly Detection",
      "Java",
    ],
  },
  {
    id: "exp3",
    role: "Software Engineer I",
    company: "Alert Enterprise",
    period: "2020 - 2023",
    description:
      "Implemented GenAI rule engines using MVEL/JS and large-scale ETL pipelines with Spring Batch. Delivered WCAG 2.0 AA accessibility compliance and AI-driven smart search functionality.",
    technologies: ["Spring Batch", "GenAI", "ETL", "Accessibility", "MVEL"],
  },
  {
    id: "exp4",
    role: "Data Scientist Intern",
    company: "TCIL-IT",
    period: "2019",
    description:
      "Developed a secure facial recognition login system integrating computer vision models with a React and Flask full-stack architecture.",
    technologies: ["Computer Vision", "Flask", "React", "Python"],
  },
  {
    id: "exp5",
    role: "Software Developer Intern",
    company: "Infowiz",
    period: "2018",
    description:
      "Created an dashboard (charts & visualizations) for login activity and compliance.",
    technologies: ["D3.js", "Dashboards", "JavaScript", "APIs"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p2",
    title: "Face Recognition Login",
    description:
      "A robust biometric authentication system eliminating passwords. Uses deep learning for facial embedding and liveness detection to ensure high-security access control.",
    technologies: [
      "OpenCV",
      "Face Recognition",
      "TensorFlow",
      "Django",
      "WebSockets",
    ],
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
    degree: "B.Tech — Computer Science & Engineering",
    school: "Panjab University Chandigarh",
    period: "2016 - 2020",
    details:
      "Focused on core Computer Science fundamentals along with advanced AI and engineering disciplines, including Deep Learning, Data Science, and Full Stack Development.",
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
  { name: "Neural Networks & Deep Learning", issuer: "Andrew Ng" },
  { name: "Machine Learning", issuer: "Kirill Eremenko (Udemy)" },
  { name: "Data Science", issuer: "Jose Portilla" },
  { name: "Big Data Specialization", issuer: "Coursera" },
  { name: "Spring & Hibernate", issuer: "Chad Darby" },
  { name: "Web Development", issuer: "Angela Yu" },
];
