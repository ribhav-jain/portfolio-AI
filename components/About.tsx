import React from 'react';
import { PROFILE } from '../constants';
import { Brain, Server, ShieldCheck, Code, Zap, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { VisualBrain, VisualPipeline, VisualShield } from './ProjectVisuals';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-secondary/30 border-y border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-accent"></span>
              <span className="text-accent font-mono text-sm tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] text-white">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-highlight">Intelligence</span> <br />
              into Enterprise Systems.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
              {PROFILE.about}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                <Globe className="w-4 h-4 text-accent" />
                <span>Based in {PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                <Cpu className="w-4 h-4 text-highlight" />
                <span>5+ Years Exp.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

          {/* Main Card - AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 row-span-1 glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-all duration-500 border-white/5 hover:border-accent/20"
          >
            {/* Visual Background */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
              <VisualBrain />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10" />

            <div className="relative z-20 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 border border-accent/20 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI & Machine Learning</h3>
                <p className="text-slate-400 max-w-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                  Specializing in the "missing middle" of AI—transforming experimental models into robust production systems. Expertise in <strong>TensorFlow</strong>, <strong>Keras</strong>, and <strong>NLP agents</strong>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Card - Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-all duration-500 border-white/5 hover:border-highlight/20 flex flex-col justify-between"
          >
            {/* Visual Background */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
              <VisualPipeline />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-highlight/10 rounded-xl flex items-center justify-center mb-6 border border-highlight/20 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                <Server className="w-6 h-6 text-highlight" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Backend Architecture</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                  Building scalable microservices with <strong>Spring Boot</strong> & <strong>Django</strong>. Expert in high-volume ETL pipelines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third Card - Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-all duration-500 border-white/5 hover:border-emerald-500/20 flex flex-col justify-between"
          >
            {/* Visual Background */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
              <VisualShield />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">IAM & Security</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                  Securing enterprise identities with <strong>OAuth2</strong>, <strong>SAML</strong>, & <strong>OIDC</strong>. Building threat detection intelligence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fourth Card (Wide) - Full Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass-card p-0 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-all duration-500 border-white/5 hover:border-indigo-500/20"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-1 p-8 flex flex-col justify-between relative z-10">
                <div>
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Full-Stack Engineering</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300">
                    Bridging the gap between data and design. I build interactive, accessible (WCAG 2.0) dashboards using <strong>React</strong> & <strong>Ext JS</strong>.
                  </p>
                </div>
              </div>

              {/* Visual Decoration - Code Editor Look */}
              <div className="flex-1 bg-slate-950/50 border-t md:border-t-0 md:border-l border-white/5 p-6 relative overflow-hidden group-hover:bg-slate-950/30 transition-colors">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Window Controls */}
                <div className="flex gap-2 mb-4 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Code Snippet */}
                <div className="font-mono text-xs leading-relaxed opacity-80 overflow-hidden">
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">1</span>
                    <span className="text-purple-400">class</span> <span className="text-yellow-200 ml-2">Developer</span> <span className="text-white ml-2">{`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">2</span>
                    <span className="ml-4 text-blue-400">constructor</span><span className="text-white">() {`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">3</span>
                    <span className="ml-8 text-slate-300">this</span><span className="text-white">.</span><span className="text-blue-300">stack</span> <span className="text-white">= [</span>
                  </div>
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">4</span>
                    <span className="ml-12 text-green-400">'React'</span><span className="text-white">,</span> <span className="text-green-400">'Spring'</span><span className="text-white">,</span> <span className="text-green-400">'TensorFlow'</span>
                  </div>
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">5</span>
                    <span className="ml-8 text-white">];</span>
                  </div>
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">6</span>
                    <span className="ml-4 text-white">{`}`}</span>
                  </div>
                  <div className="flex mt-2">
                    <span className="w-6 text-slate-600 select-none">7</span>
                    <span className="ml-4 text-purple-400">async</span> <span className="text-yellow-200">deploy</span><span className="text-white">() {`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">8</span>
                    <span className="ml-8 text-purple-400">return</span> <span className="text-blue-400">await</span> <span className="text-slate-300">this</span><span className="text-white">.</span><span className="text-blue-300">scale</span><span className="text-white">();</span>
                  </div>
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">9</span>
                    <span className="ml-4 text-white">{`}`}</span>
                  </div>
                  <div className="flex">
                    <span className="w-6 text-slate-600 select-none">10</span>
                    <span className="text-white">{`}`}</span>
                  </div>

                  {/* Cursor */}
                  <div className="w-2 h-4 bg-accent mt-1 animate-pulse ml-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;