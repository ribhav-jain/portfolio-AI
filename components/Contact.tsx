import React from 'react';
import { Mail, Github, Linkedin, Code, Database, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-primary border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
              Let's build <br />
              <span className="text-slate-700">something</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">intelligent.</span>
            </h2>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-medium text-white hover:text-accent transition-colors border-b border-white/20 pb-1 hover:border-accent"
            >
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
              {PROFILE.email}
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-xl text-slate-400 mb-10 max-w-md font-light">
              Whether you need to scale your AI infrastructure, integrate complex LLMs, or secure your enterprise IAM, I'm ready to help.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Github", href: PROFILE.socials.github, icon: Github },
                { label: "LinkedIn", href: PROFILE.socials.linkedin, icon: Linkedin },
                { label: "HackerRank", href: PROFILE.socials.hackerrank, icon: Code },
                { label: "Kaggle", href: PROFILE.socials.kaggle, icon: Database },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white group"
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-slate-500 text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;