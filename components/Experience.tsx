import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative border-y border-line/60 bg-surface/30 py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="kicker">Career path</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
            Professional journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* rail */}
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-accent/60 via-line to-transparent lg:left-52" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative grid grid-cols-1 gap-x-8 pl-8 lg:grid-cols-[13rem_1fr] lg:pl-0"
              >
                {/* period */}
                <div className="mb-1 lg:pr-8 lg:pt-1 lg:text-right">
                  <span className="font-mono text-sm text-faint transition-colors group-hover:text-accent">
                    {exp.period}
                  </span>
                </div>

                {/* node */}
                <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-base transition-transform group-hover:scale-125 lg:left-[12.7rem]" />

                {/* card */}
                <div className="rounded-2xl border border-transparent p-1 transition-colors lg:p-5 lg:group-hover:border-line/60 lg:group-hover:bg-white/[0.02]">
                  <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-accent">
                    {exp.role}
                  </h3>
                  <p className="mb-3 font-medium text-accent">{exp.company}</p>
                  <p className="max-w-2xl leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  {exp.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/5 bg-white/5 px-2 py-1 font-mono text-xs text-faint"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
