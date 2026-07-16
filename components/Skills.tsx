import React from "react";
import { SKILL_CATEGORIES } from "../constants";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { SkillCategory } from "../types";
import { Bot, Database, Activity, BrainCircuit, Server, ShieldCheck } from "lucide-react";

const ICONS = [Bot, Database, Activity, BrainCircuit, Server, ShieldCheck];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-base py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full bg-highlight/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="kicker">Tech stack</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
            Tools of the trade
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCard key={category.title} category={category} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ category: SkillCategory; idx: number }> = ({
  category,
  idx,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = ICONS[idx % ICONS.length];

  const onMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={onMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-line/60 bg-surface/40"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgb(var(--accent) / 0.12), transparent 75%)`,
        }}
      />
      <div className="relative z-10 h-full p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-accent">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
            {category.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="cursor-default rounded-lg border border-white/5 bg-base/50 px-3 py-1.5 font-mono text-xs text-muted transition-all group-hover:border-white/10 group-hover:text-ink"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
