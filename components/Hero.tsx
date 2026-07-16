import React from "react";
import { Download, Code2, Database, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { PROFILE, METRICS } from "../constants";
import { motion } from "framer-motion";

const SOCIALS = [
  { icon: Github, href: PROFILE.socials.github, label: "GitHub" },
  { icon: Linkedin, href: PROFILE.socials.linkedin, label: "LinkedIn" },
  { icon: Code2, href: PROFILE.socials.hackerrank, label: "HackerRank" },
  { icon: Database, href: PROFILE.socials.kaggle, label: "Kaggle" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-28">
      {/* Ambient background */}
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[640px] w-[640px] animate-blob rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[520px] w-[520px] animate-blob rounded-full bg-highlight/10 blur-[120px] [animation-delay:4s]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" />

      <div className="relative z-10 flex w-full flex-1 items-center py-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Text column */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="kicker text-accent">Open to opportunities</span>
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-3 font-mono text-sm text-muted"
          >
            Hi, I&apos;m {PROFILE.name}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" />
          </motion.p>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Building the
            <br />
            <span className="text-gradient-accent">future of logic.</span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-lg font-light leading-relaxed text-muted"
          >
            {PROFILE.shortBio}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-base shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-transform hover:-translate-y-0.5"
            >
              View featured work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={PROFILE.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-medium text-ink backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Download CV
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-11 flex items-center gap-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-line to-transparent" />
            <div className="flex gap-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  aria-label={label}
                  className="text-faint transition-all hover:-translate-y-0.5 hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
        >
          <HeroVisual />
        </motion.div>
        </div>
      </div>

      {/* Metrics strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 hidden border-t border-line/60 bg-base/40 backdrop-blur-sm lg:block"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-line/60 px-6">
          {METRICS.map((m) => (
            <div key={m.label} className="px-6 py-5">
              <p className="font-display text-3xl font-bold text-ink">{m.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-faint">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

/* Abstract "reasoning graph" — nodes and signals, no stock photo. */
const HeroVisual: React.FC = () => {
  const nodes = [
    { cx: 60, cy: 70 },
    { cx: 60, cy: 170 },
    { cx: 60, cy: 270 },
    { cx: 175, cy: 120 },
    { cx: 175, cy: 220 },
    { cx: 290, cy: 170 },
    { cx: 400, cy: 110 },
    { cx: 400, cy: 230 },
  ];
  const edges = [
    [0, 3], [1, 3], [1, 4], [2, 4],
    [3, 5], [4, 5], [5, 6], [5, 7],
  ];

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-accent/40 to-highlight/40 opacity-30 blur-md transition-opacity duration-700 group-hover:opacity-60" />
      <div className="glass relative overflow-hidden rounded-3xl">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-rose-500/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
          <span className="ml-3 font-mono text-xs text-faint">agent.graph.tsx</span>
        </div>

        <div className="relative aspect-[10/8] w-full">
          <svg
            viewBox="0 0 460 340"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <defs>
              <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="rgb(var(--highlight))" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {edges.map(([a, b], i) => (
              <line
                key={i}
                x1={nodes[a].cx}
                y1={nodes[a].cy}
                x2={nodes[b].cx}
                y2={nodes[b].cy}
                stroke="url(#edge)"
                strokeWidth="1.5"
              />
            ))}

            {/* travelling signals */}
            {edges.map(([a, b], i) => (
              <motion.circle
                key={`s-${i}`}
                r="3"
                fill="rgb(var(--highlight))"
                initial={{ cx: nodes[a].cx, cy: nodes[a].cy, opacity: 0 }}
                animate={{
                  cx: [nodes[a].cx, nodes[b].cx],
                  cy: [nodes[a].cy, nodes[b].cy],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
              />
            ))}

            {nodes.map((n, i) => (
              <motion.g
                key={i}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
                style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
              >
                <circle cx={n.cx} cy={n.cy} r="14" fill="rgb(var(--accent))" opacity="0.1" />
                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r="6"
                  fill="rgb(var(--accent))"
                  stroke="rgb(var(--highlight))"
                  strokeWidth="1.5"
                />
              </motion.g>
            ))}
          </svg>

          {/* HUD overlay */}
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/5 bg-base/60 px-4 py-3 backdrop-blur-md">
            <div>
              <p className="kicker flex items-center gap-2 text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Current focus
              </p>
              <p className="mt-1 font-semibold leading-tight text-ink">
                Agentic AI &amp; Identity Security
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* floating chips */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass-nav absolute -right-4 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
          <Code2 className="h-4 w-4" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-faint">Experience</p>
          <p className="font-bold text-ink">6+ Years</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass-nav absolute -left-4 bottom-14 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-highlight/15 text-highlight">
          <Database className="h-4 w-4" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-faint">Stack</p>
          <p className="text-sm font-bold leading-tight text-ink">Full-Stack + ML</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
