import React from "react";
import { EDUCATION, CERTIFICATIONS } from "../constants";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <section id="education" className="relative bg-base py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(var(--accent)/0.06),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl font-bold text-ink">Education</h2>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="relative border-l border-line pl-8">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-base" />
                  <h3 className="font-display text-xl font-bold text-ink">
                    {edu.degree}
                  </h3>
                  <p className="text-accent">{edu.school}</p>
                  <p className="mb-4 mt-1 font-mono text-sm text-faint">{edu.period}</p>
                  <p className="max-w-md leading-relaxed text-muted">{edu.details}</p>
                  {edu.coursework && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.coursework.map((course, j) => (
                        <span
                          key={j}
                          className="rounded border border-white/5 bg-white/5 px-2 py-1 font-mono text-xs text-muted"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-highlight/10 p-3 text-highlight">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl font-bold text-ink">
                Certifications
              </h2>
            </div>

            <div className="grid gap-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 rounded-xl border border-line/60 bg-surface/40 p-4 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500/60 transition-colors group-hover:text-emerald-400" />
                  <div>
                    <h4 className="font-semibold text-ink">{cert.name}</h4>
                    <p className="mt-0.5 text-xs text-faint">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
