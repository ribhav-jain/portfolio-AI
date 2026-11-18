import type { IconName } from "../components/Icon.tsx";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  /** Brand marks are drawn filled rather than stroked. */
  solid?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export const profile = {
  name: "Ribhav Jain",
  initials: "RJ",
  role: "Lead AI Engineer",
  company: "Alert Enterprise",
  location: "India",
  experience: "6+ Years",
  email: "ribhavjain4@gmail.com",
  /**
   * The Download CV button shows only when this is set. Put the PDF in `public/`
   * and point to it here, for example "/Ribhav-Jain-CV.pdf".
   */
  cvUrl: null as string | null,
  tagline:
    "Lead AI Engineer and full-stack developer — I build agentic AI, scalable backends, and the secure identity platforms they run on.",
  about:
    "I'm a Lead AI Engineer with 6+ years spanning AI, full-stack development, and data science. I specialize in the 'missing middle' of AI — turning experimental models into production systems — while building scalable backends (FastAPI, Django, Spring) and secure identity platforms (SAML, OIDC, OAuth). Most recently I architected a production agentic AI platform on multi-agent LangGraph orchestration and governed MCP tooling, and lead the team that delivers it.",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ribhav-jain", icon: "github", solid: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ribhav-jain",
    icon: "linkedin",
    solid: true,
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/ribhavjain1",
    icon: "hackerrank",
  },
  { label: "Kaggle", href: "https://www.kaggle.com/RibhavJain", icon: "kaggle" },
];

export const stats: Stat[] = [
  { value: "6+", label: "Years building", detail: "AI, full-stack and data science" },
  { value: "5", label: "Enterprise tenants live", detail: "Agentic AI platform" },
  { value: "30%", label: "Fewer security breaches", detail: "Identity Intelligence" },
  { value: "40%", label: "Faster onboarding", detail: "Entity Builder and Layout Designer" },
];
