import React from "react";
import { Mail, Code2, Database } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { PROFILE } from "../constants";
import { motion } from "framer-motion";

const SOCIALS = [
  { label: "GitHub", href: PROFILE.socials.github, icon: Github },
  { label: "LinkedIn", href: PROFILE.socials.linkedin, icon: Linkedin },
  { label: "HackerRank", href: PROFILE.socials.hackerrank, icon: Code2 },
  { label: "Kaggle", href: PROFILE.socials.kaggle, icon: Database },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line/60 bg-base py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-4xl -translate-x-1/2 bg-accent/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-24 grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="kicker">Contact</span>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-ink md:text-7xl">
              Let&apos;s build
              <br />
              <span className="text-faint">something</span>
              <br />
              <span className="text-gradient-accent">intelligent.</span>
            </h2>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-8 inline-flex items-center gap-3 border-b border-white/20 pb-1 text-xl font-medium text-ink transition-colors hover:border-accent hover:text-accent md:text-2xl"
            >
              <Mail className="h-6 w-6" />
              {PROFILE.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <p className="mb-9 max-w-md text-lg font-light leading-relaxed text-muted">
              Whether you need to scale AI infrastructure, integrate complex LLMs,
              or secure your enterprise identity stack — I&apos;d love to help.
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-ink transition-colors hover:bg-white/10"
                >
                  <Icon className="h-5 w-5 text-muted transition-colors group-hover:text-ink" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 font-mono text-sm text-faint md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for opportunities
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
