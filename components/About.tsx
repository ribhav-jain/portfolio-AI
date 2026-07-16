import React from "react";
import { PROFILE } from "../constants";
import { Zap, Server, ShieldCheck, Code2, Globe, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { VisualBrain, VisualPipeline, VisualShield } from "./ProjectVisuals";

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-line/60 bg-surface/30 py-28"
    >
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-highlight/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...inView} transition={{ duration: 0.7 }}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="kicker">About me</span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.08] text-ink md:text-5xl">
              Engineering{" "}
              <span className="text-gradient-accent">intelligence</span>
              <br />
              into enterprise systems.
            </h2>
          </motion.div>
          <motion.div {...inView} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="text-lg font-light leading-relaxed text-muted">
              {PROFILE.about}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Chip icon={<Globe className="h-4 w-4 text-accent" />}>
                Based in {PROFILE.location}
              </Chip>
              <Chip icon={<Cpu className="h-4 w-4 text-highlight" />}>
                6+ Years Experience
              </Chip>
            </div>
          </motion.div>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-[280px] grid-cols-1 gap-5 md:grid-cols-3">
          <BentoCard
            className="md:col-span-2"
            icon={<Zap className="h-6 w-6" />}
            accent="accent"
            title="AI & Machine Learning"
            visual={<VisualBrain />}
            visualWide
          >
            Designing production agentic systems — multi-agent{" "}
            <strong className="text-ink">LangGraph</strong> orchestration,
            governed <strong className="text-ink">MCP</strong> tooling, and{" "}
            <strong className="text-ink">RAG</strong> — plus the ML that powers
            anomaly detection.
          </BentoCard>

          <BentoCard
            icon={<Server className="h-6 w-6" />}
            accent="highlight"
            title="Backend Architecture"
            visual={<VisualPipeline />}
          >
            Scalable services with{" "}
            <strong className="text-ink">FastAPI</strong> &amp;{" "}
            <strong className="text-ink">Django (ASGI)</strong>, plus
            high-volume Spring Batch pipelines.
          </BentoCard>

          <BentoCard
            icon={<ShieldCheck className="h-6 w-6" />}
            accent="emerald"
            title="IAM & Security"
            visual={<VisualShield />}
          >
            Enterprise identity with{" "}
            <strong className="text-ink">OAuth2</strong>,{" "}
            <strong className="text-ink">SAML</strong> &amp;{" "}
            <strong className="text-ink">OIDC</strong>, plus insider-threat
            detection.
          </BentoCard>

          <CodeCard />
        </div>
      </div>
    </section>
  );
};

const Chip: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({
  icon,
  children,
}) => (
  <div className="flex cursor-default items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3.5 py-1.5 font-mono text-sm text-muted transition-colors hover:bg-white/10">
    {icon}
    <span>{children}</span>
  </div>
);

const ACCENT_MAP: Record<string, string> = {
  accent: "bg-accent/10 text-accent border-accent/20 group-hover:border-accent/40",
  highlight:
    "bg-highlight/10 text-highlight border-highlight/20 group-hover:border-highlight/40",
  emerald:
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:border-emerald-500/40",
};

const BentoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  accent: string;
  visual?: React.ReactNode;
  visualWide?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ icon, title, accent, visual, visualWide, className = "", children }) => (
  <motion.div
    {...inView}
    transition={{ duration: 0.6 }}
    className={`glass group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-colors duration-500 hover:bg-white/[0.04] ${className}`}
  >
    {visual && (
      <div
        className={`pointer-events-none absolute ${
          visualWide ? "right-0 top-0 h-full w-1/2" : "inset-0"
        } opacity-40 transition-opacity duration-700 group-hover:opacity-70`}
      >
        {visual}
      </div>
    )}
    <div className="relative z-10">
      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${ACCENT_MAP[accent]}`}
      >
        {icon}
      </div>
      <h3 className="mb-2.5 font-display text-xl font-bold text-ink">{title}</h3>
      <p className="max-w-md leading-relaxed text-muted">{children}</p>
    </div>
  </motion.div>
);

const CodeCard: React.FC = () => (
  <motion.div
    {...inView}
    transition={{ duration: 0.6 }}
    className="glass group relative flex flex-col overflow-hidden rounded-3xl md:col-span-2"
  >
    <div className="flex flex-1 flex-col p-8 md:flex-row">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink transition-transform duration-300 group-hover:scale-110">
            <Code2 className="h-6 w-6" />
          </div>
          <h3 className="mb-2.5 font-display text-xl font-bold text-ink">
            Full-Stack Engineering
          </h3>
          <p className="max-w-md leading-relaxed text-muted">
            Bridging data and design — accessible (WCAG 2.0), interactive
            dashboards built with <strong className="text-ink">React</strong> &amp;{" "}
            <strong className="text-ink">Next.js</strong>.
          </p>
        </div>
      </div>
      <div className="mt-6 flex-1 rounded-2xl border border-white/5 bg-base/60 p-5 font-mono text-xs leading-relaxed md:ml-6 md:mt-0">
        <pre className="overflow-x-auto text-muted">
          <code>
            <span className="text-accent">class</span>{" "}
            <span className="text-highlight">Engineer</span> {"{"}
            {"\n  "}
            <span className="text-accent">stack</span> = [
            {"\n    "}
            <span className="text-emerald-400">'LangGraph'</span>,{" "}
            <span className="text-emerald-400">'FastAPI'</span>,
            {"\n    "}
            <span className="text-emerald-400">'TensorFlow'</span>,
            {"\n  "}];
            {"\n  "}
            <span className="text-accent">async</span>{" "}
            <span className="text-highlight">deploy</span>() {"{"}
            {"\n    "}
            <span className="text-accent">return</span> this.
            <span className="text-highlight">scale</span>();
            {"\n  "}
            {"}"}
            {"\n"}
            {"}"}
            <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-accent align-middle" />
          </code>
        </pre>
      </div>
    </div>
  </motion.div>
);

export default About;
