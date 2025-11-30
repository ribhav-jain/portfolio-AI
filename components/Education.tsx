import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 relative bg-primary">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.05),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10">
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-primary" />
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-lg text-accent mb-2">{edu.school}</p>
                  <p className="text-sm font-mono text-slate-500 mb-4">{edu.period}</p>
                  <p className="text-slate-400 leading-relaxed max-w-md mb-4">
                    {edu.details}
                  </p>
                  {edu.coursework && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/5 border border-white/5 rounded text-slate-400">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-highlight/10 text-highlight">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 text-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">
                      {cert.issuer}
                    </p>
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