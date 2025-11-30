import React from "react";
import { SKILL_CATEGORIES } from "../constants";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { SkillCategory } from "../types";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-primary">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Tools of the Trade
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCard key={category.title} category={category} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  category: SkillCategory;
  idx: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, idx }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-secondary/30 rounded-2xl border border-white/5 overflow-hidden"
    >
      {/* Spotlight Gradient - Follows Mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Inner Content */}
      <div className="relative h-full p-8 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        <h3 className="text-lg font-bold mb-6 text-white group-hover:text-accent transition-colors flex items-center gap-3">
          <span className="w-1 h-6 bg-accent rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          {category.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs font-medium bg-primary/50 border border-white/5 text-slate-400 rounded-lg group-hover:text-slate-200 group-hover:border-white/10 transition-all cursor-default"
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
