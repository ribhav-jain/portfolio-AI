import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCover } from "./ProjectVisuals";

const CATEGORIES = ["All", "AI/ML", "Security", "Full Stack"];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const filtered = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative overflow-hidden bg-base py-28">
      <div className="bg-grid absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="kicker">Selected work</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
              Featured projects
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5 rounded-2xl border border-line/60 bg-surface/50 p-1.5 backdrop-blur-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl bg-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const Wrapper = project.link ? "a" : "div";
              const wrapperProps = project.link
                ? { href: project.link, target: "_blank", rel: "noreferrer" }
                : {};
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                >
                  <Wrapper {...wrapperProps} className="group flex flex-col gap-5">
                    {/* Cover */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line/60 shadow-xl transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_40px_rgb(var(--accent)/0.12)]">
                      <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                        <ProjectCover id={project.id} category={project.category} />
                      </div>
                      <div className="absolute left-4 top-4 z-20">
                        <span className="rounded-full border border-white/10 bg-base/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute right-4 top-4 z-20 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-base shadow-lg">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="mb-2 font-display text-xl font-bold text-ink transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-highlight/10 bg-highlight/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-highlight/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
