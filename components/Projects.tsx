import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI/ML", "Security", "Full Stack"];

  const filteredProjects = PROJECTS.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  return (
    <section
      id="projects"
      className="py-32 bg-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white opacity-[0.1]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Fixed alignment: items-start for mobile (left), items-end for desktop (right-ish/bottom) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-highlight font-mono text-sm tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
              Featured Work
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-secondary/50 backdrop-blur-sm rounded-xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col gap-6"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-secondary group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Category Badge Over Image */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-mono uppercase tracking-wider text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-black shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-medium text-highlight/80 bg-highlight/5 border border-highlight/10 px-2 py-1 rounded uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
