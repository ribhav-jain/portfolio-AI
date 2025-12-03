import React from 'react';
import { motion, Transition } from 'framer-motion';

const LoopTransition: Transition = { duration: 4, repeat: Infinity, ease: "easeInOut" };
const SpinTransition: Transition = { duration: 20, repeat: Infinity, ease: "linear" };

// --- BACKGROUNDS ---

export const VisualHexGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none">
      <svg width="100%" height="100%">
        <pattern id="hex" x="0" y="0" width="40" height="68" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
          <path d="M20 0 L40 17 L40 51 L20 68 L0 51 L0 17 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    </div>
  );
};

// --- BENTO GRID VISUALS ---

// 1. AI Brain & Embeddings
export const VisualBrain: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center opacity-60">
      <svg viewBox="0 0 200 200" className="w-96 h-96">
        <defs>
          <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(var(--highlight))" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Central Brain Nodes */}
        <motion.g animate={{ scale: [0.95, 1.05, 0.95] }} transition={LoopTransition}>
          <path
            d="M100,60 Q130,60 140,90 T130,140 Q100,160 70,140 T60,90 Q70,60 100,60"
            fill="none"
            stroke="url(#brainGrad)"
            strokeWidth="2"
            className="opacity-50"
          />
          {/* Internal Connections */}
          <motion.path
            d="M100,60 L100,160 M60,90 L140,90 M70,140 L130,60"
            stroke="rgb(var(--accent))"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.g>

        {/* Floating Embeddings (Particles) */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="rgb(var(--highlight))"
            initial={{ x: 100, y: 100, opacity: 0 }}
            animate={{
              x: 100 + Math.cos(i) * 60,
              y: 100 + Math.sin(i) * 60,
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// 2. Shield & Scan
export const VisualShield: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center opacity-60">
      <svg viewBox="0 0 200 200" className="w-64 h-64">
        {/* Shield Outline */}
        <path
          d="M100,30 L160,50 V90 C160,130 130,160 100,175 C70,160 40,130 40,90 V50 L100,30 Z"
          fill="none"
          stroke="rgb(var(--accent))"
          strokeWidth="2"
          className="opacity-30"
        />

        {/* Inner Circuit */}
        <path
          d="M100,45 V160 M55,60 H145 M65,130 H135"
          fill="none"
          stroke="rgb(var(--accent))"
          strokeWidth="1"
          className="opacity-20"
        />

        {/* Scanning Beam */}
        <motion.rect
          x="40"
          y="30"
          width="120"
          height="4"
          fill="rgb(var(--highlight))"
          className="opacity-50 blur-sm"
          animate={{ y: [20, 140, 20], opacity: [0, 0.8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Identity Points */}
        <motion.g>
          <circle cx="80" cy="80" r="2" fill="white" className="animate-pulse" />
          <circle cx="120" cy="80" r="2" fill="white" className="animate-pulse" />
          <circle cx="100" cy="110" r="2" fill="white" className="animate-pulse" />
          <path d="M80,80 L120,80 L100,110 Z" fill="none" stroke="rgb(var(--highlight))" strokeWidth="0.5" opacity="0.5" />
        </motion.g>
      </svg>
    </div>
  );
};

// 3. Data Pipelines
export const VisualPipeline: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center opacity-60">
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-80">
        {/* Nodes */}
        <circle cx="40" cy="100" r="15" stroke="rgb(var(--accent))" fill="none" strokeWidth="2" />
        <circle cx="100" cy="50" r="15" stroke="rgb(var(--accent))" fill="none" strokeWidth="2" />
        <circle cx="100" cy="150" r="15" stroke="rgb(var(--accent))" fill="none" strokeWidth="2" />
        <circle cx="160" cy="100" r="15" stroke="rgb(var(--accent))" fill="none" strokeWidth="2" />

        {/* Paths */}
        <path d="M55,100 H145 M40,85 L100,50 L160,85 M40,115 L100,150 L160,115" stroke="rgb(var(--accent))" strokeWidth="1" opacity="0.3" fill="none" />

        {/* Moving Packets */}
        <motion.circle r="4" fill="rgb(var(--highlight))"
          animate={{ cx: [55, 145], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          cy="100"
        />
        <motion.circle r="4" fill="rgb(var(--highlight))"
          animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
          style={{ offsetPath: "path('M40,85 L100,50 L160,85')" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle r="3" fill="#fff"
          initial={{ x: 40, y: 85 }}
          animate={{ x: 100, y: 50 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle r="3" fill="#fff"
          initial={{ x: 100, y: 50 }}
          animate={{ x: 160, y: 85 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
        />
      </svg>
    </div>
  );
};

// --- SKILLS ICONS (3D Wireframe) ---

// 4. Rotating AI Brain Wireframe
export const IconBrain3D: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
    <motion.g animate={{ rotateY: 360 }} transition={SpinTransition} style={{ originX: "50%", originY: "50%" }}>
      <ellipse cx="50" cy="50" rx="30" ry="20" stroke="currentColor" fill="none" strokeWidth="0.5" />
      <ellipse cx="50" cy="50" rx="20" ry="30" stroke="currentColor" fill="none" strokeWidth="0.5" className="rotate-45" />
      <ellipse cx="50" cy="50" rx="25" ry="25" stroke="currentColor" fill="none" strokeWidth="0.5" className="rotate-90" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
    </motion.g>
  </svg>
);

// 5. Rotating Server Stack
export const IconServer3D: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
    <motion.g animate={{ rotateY: 360 }} transition={SpinTransition} style={{ originX: "50%", originY: "50%" }}>
      <rect x="25" y="20" width="50" height="15" rx="2" stroke="currentColor" fill="none" strokeWidth="0.5" />
      <rect x="25" y="40" width="50" height="15" rx="2" stroke="currentColor" fill="none" strokeWidth="0.5" />
      <rect x="25" y="60" width="50" height="15" rx="2" stroke="currentColor" fill="none" strokeWidth="0.5" />
      {/* Blinking lights */}
      <circle cx="65" cy="27" r="1.5" fill="currentColor" />
      <circle cx="70" cy="27" r="1.5" fill="currentColor" />
    </motion.g>
  </svg>
);

// 6. Rotating Layout/UI
export const IconLayout3D: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
    <motion.g animate={{ rotateX: 360, rotateY: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ originX: "50%", originY: "50%" }}>
      <rect x="20" y="20" width="60" height="60" rx="2" stroke="currentColor" fill="none" strokeWidth="0.5" />
      <rect x="25" y="25" width="15" height="50" stroke="currentColor" fill="none" strokeWidth="0.5" />
      <rect x="45" y="25" width="30" height="15" stroke="currentColor" fill="none" strokeWidth="0.5" />
      <rect x="45" y="45" width="30" height="30" stroke="currentColor" fill="none" strokeWidth="0.5" />
    </motion.g>
  </svg>
);
