import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">Professional Journey</h2>
        </div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative pl-8 md:pl-0"
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-12 items-start">
                {/* Left Side */}
                <div className={`text-right ${idx % 2 === 1 ? 'order-3 text-left' : ''}`}>
                  {idx % 2 === 0 ? (
                    <div className="group-hover:-translate-x-2 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                      <p className="text-accent text-lg mb-4 font-medium">{exp.company}</p>
                      <p className="text-slate-400 leading-relaxed text-sm max-w-sm ml-auto">{exp.description}</p>
                      <div className="flex flex-wrap justify-end gap-2 mt-4">
                        {exp.technologies.slice(0, 3).map(t => <span key={t} className="text-xs border border-white/5 bg-white/5 px-2 py-1 rounded text-slate-400">{t}</span>)}
                      </div>
                    </div>
                  ) : (
                    <span className="text-5xl font-mono font-bold text-white/5 group-hover:text-white/10 transition-colors block mt-2">{exp.period.split('-')[0]}</span>
                  )}
                </div>

                {/* Center Line */}
                <div className="relative flex flex-col items-center h-full min-h-[150px]">
                  <div className="w-4 h-4 rounded-full bg-surface border-2 border-accent z-10 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                  <div className="w-px h-full bg-gradient-to-b from-accent/50 to-transparent absolute top-4 -bottom-20 group-last:hidden" />
                </div>

                {/* Right Side */}
                <div className={`${idx % 2 === 1 ? 'order-1 text-right' : ''}`}>
                  {idx % 2 === 1 ? (
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                      <p className="text-accent text-lg mb-4 font-medium">{exp.company}</p>
                      <p className="text-slate-400 leading-relaxed text-sm max-w-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.slice(0, 3).map(t => <span key={t} className="text-xs border border-white/5 bg-white/5 px-2 py-1 rounded text-slate-400">{t}</span>)}
                      </div>
                    </div>
                  ) : (
                    <span className="text-5xl font-mono font-bold text-white/5 group-hover:text-white/10 transition-colors block mt-2">{exp.period.split('-')[0]}</span>
                  )}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden relative border-l border-white/10 pl-8 pb-12 last:pb-0">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-primary" />
                <span className="text-sm font-mono text-accent mb-2 block tracking-wider">{exp.period}</span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-slate-400 mb-4">{exp.company}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.slice(0, 3).map(t => <span key={t} className="text-xs border border-white/10 bg-white/5 px-2 py-1 rounded text-slate-500">{t}</span>)}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;