import React from 'react';
import { Download, Github, Linkedin, Code, Database, ChevronRight, Cpu, Globe, Shield } from 'lucide-react';
import { PROFILE } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary selection:bg-accent/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.1]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10 animate-blob mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* TEXT COLUMN (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 text-left"
        >
          {/* Status Badge - Dynamic Accent Color */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-8 hover:bg-accent/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent text-xs font-mono font-medium tracking-wider uppercase">Open to Opportunities</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-white">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Future of Logic
            </span>
          </h1>

          <p className="text-slate-400 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed font-light">
            {PROFILE.shortBio}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              View Featured Work
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 group">
              Download CV <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <div className="h-px w-12 bg-gradient-to-r from-slate-700 to-transparent" />
            <div className="flex gap-6">
              {[
                { icon: <Github className="w-5 h-5" />, href: PROFILE.socials.github },
                { icon: <Linkedin className="w-5 h-5" />, href: PROFILE.socials.linkedin },
                { icon: <Code className="w-5 h-5" />, href: PROFILE.socials.hackerrank, label: "HackerRank" },
                // { icon: <Database className="w-5 h-5" />, href: PROFILE.socials.kaggle, label: "Kaggle" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* IMAGE COLUMN (Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-2 flex justify-center lg:justify-end relative perspective-1000"
        >
          {/* Abstract Glow Behind */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-[80px] opacity-40 animate-pulse" />

          <div className="relative group w-full max-w-md mx-auto lg:mx-0">
            {/* Tech Frame Decoration */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-highlight rounded-2xl opacity-30 blur-sm group-hover:opacity-60 transition duration-1000" />

            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl overflow-hidden bg-surface shadow-2xl ring-1 ring-white/10">

              {/* Scanning Line Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-accent/5 to-transparent h-[200%] w-full animate-shimmer opacity-30" />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Ribhav Jain"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 filter saturate-[0.8] group-hover:saturate-100"
                />
              </div>

              {/* "Current Focus" HUD Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="backdrop-blur-xl bg-secondary/80 border border-white/10 p-5 rounded-xl shadow-2xl relative overflow-hidden group/card">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-[10px] font-mono text-accent mb-1 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Current Focus
                      </p>
                      <p className="text-white font-bold text-lg leading-tight">Agentic AI & <br /> Identity Security</p>
                    </div>
                    <Shield className="w-8 h-8 text-white/10 group-hover/card:text-accent/20 transition-colors" />
                  </div>

                  {/* Tiny stats row */}
                  <div className="flex gap-4 mt-3 border-t border-white/5 pt-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Cpu className="w-3 h-3" />
                      <span>GenAI</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Globe className="w-3 h-3" />
                      <span>Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Holographic Widgets */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-12 glass-nav backdrop-blur-xl p-4 rounded-xl flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-30 border border-white/10 max-w-[160px]"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Experience</p>
                <p className="text-lg font-bold text-white">5+ Years</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-32 glass-nav backdrop-blur-xl p-4 rounded-xl flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-30 border border-white/10 max-w-[180px]"
            >
              <div className="w-10 h-10 rounded-lg bg-highlight/20 flex items-center justify-center text-highlight">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Tech Stack</p>
                <p className="text-sm font-bold text-white leading-tight">Full Stack & <br />Data Science</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;