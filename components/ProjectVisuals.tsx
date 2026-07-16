import React from "react";
import { motion, Transition } from "framer-motion";

const Loop: Transition = { duration: 4, repeat: Infinity, ease: "easeInOut" };

/* ── Bento background visuals (used in About) ─────────────────── */

export const VisualBrain: React.FC = () => (
  <div className="flex h-full w-full items-center justify-center opacity-70">
    <svg viewBox="0 0 200 200" className="h-80 w-80">
      <defs>
        <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="rgb(var(--highlight))" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <motion.g animate={{ scale: [0.95, 1.05, 0.95] }} transition={Loop}>
        <path
          d="M100,60 Q130,60 140,90 T130,140 Q100,160 70,140 T60,90 Q70,60 100,60"
          fill="none"
          stroke="url(#brainGrad)"
          strokeWidth="2"
          className="opacity-50"
        />
        <motion.path
          d="M100,60 L100,160 M60,90 L140,90 M70,140 L130,60"
          stroke="rgb(var(--accent))"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.g>
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          r="3"
          fill="rgb(var(--highlight))"
          initial={{ cx: 100, cy: 100, opacity: 0 }}
          animate={{
            cx: 100 + Math.cos(i) * 60,
            cy: 100 + Math.sin(i) * 60,
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
        />
      ))}
    </svg>
  </div>
);

export const VisualShield: React.FC = () => (
  <div className="flex h-full w-full items-center justify-center opacity-60">
    <svg viewBox="0 0 200 200" className="h-64 w-64">
      <path
        d="M100,30 L160,50 V90 C160,130 130,160 100,175 C70,160 40,130 40,90 V50 L100,30 Z"
        fill="none"
        stroke="rgb(var(--accent))"
        strokeWidth="2"
        className="opacity-30"
      />
      <path
        d="M100,45 V160 M55,60 H145 M65,130 H135"
        fill="none"
        stroke="rgb(var(--accent))"
        strokeWidth="1"
        className="opacity-20"
      />
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
    </svg>
  </div>
);

export const VisualPipeline: React.FC = () => (
  <div className="flex h-full w-full items-center justify-center opacity-70">
    <svg viewBox="0 0 200 200" className="h-full w-full">
      {[
        [40, 100],
        [100, 50],
        [100, 150],
        [160, 100],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="15"
          stroke="rgb(var(--accent))"
          fill="none"
          strokeWidth="2"
        />
      ))}
      <path
        d="M55,100 H145 M40,85 L100,50 L160,85 M40,115 L100,150 L160,115"
        stroke="rgb(var(--accent))"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
      <motion.circle
        r="4"
        fill="rgb(var(--highlight))"
        cy="100"
        animate={{ cx: [55, 145], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

/* ── Per-project cover art (one distinct animation per project) ── */

const SVG: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 400 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
    {children}
  </svg>
);

const A = "rgb(var(--accent))";
const H = "rgb(var(--highlight))";

// Face Recognition Login — biometric scan
const CoverFace: React.FC = () => {
  const landmarks = [
    [178, 100],
    [222, 100],
    [200, 132],
    [182, 160],
    [218, 160],
  ];
  return (
    <SVG>
      {[
        [122, 62, 1, 1],
        [278, 62, -1, 1],
        [122, 188, 1, -1],
        [278, 188, -1, -1],
      ].map(([x, y, dx, dy], i) => (
        <path
          key={i}
          d={`M${x},${(y as number) + 20 * (dy as number)} L${x},${y} L${(x as number) + 20 * (dx as number)},${y}`}
          fill="none"
          stroke={A}
          strokeWidth="2"
          opacity="0.6"
        />
      ))}
      <ellipse cx="200" cy="125" rx="56" ry="70" fill="none" stroke={A} strokeWidth="1.5" opacity="0.4" />
      <path
        d="M178,100 L222,100 M200,132 L182,160 L218,160 L200,132 M178,100 L200,132 L222,100"
        fill="none"
        stroke={H}
        strokeWidth="0.75"
        opacity="0.4"
      />
      {landmarks.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="3"
          fill={H}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
      <motion.rect
        x="122"
        width="156"
        height="2.5"
        fill={H}
        className="blur-[1px]"
        animate={{ y: [60, 190, 60], opacity: [0, 0.9, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </SVG>
  );
};

// AI Knowledge Base & FAQ — documents → retrieval → answer
const CoverKnowledge: React.FC = () => (
  <SVG>
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x={70 + i * 9}
        y={78 + i * 12}
        width="72"
        height="94"
        rx="6"
        fill="var(--color-surface)"
        stroke={A}
        strokeWidth="1.5"
        opacity="0.55"
      />
    ))}
    {[0, 1, 2, 3].map((i) => (
      <line
        key={i}
        x1="82"
        y1={100 + i * 15}
        x2={i % 2 ? 120 : 135}
        y2={100 + i * 15}
        stroke={A}
        strokeWidth="2"
        opacity="0.4"
      />
    ))}
    <path d="M150,125 H292" stroke={A} strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
    <circle cx="320" cy="125" r="26" fill={A} opacity="0.1" />
    <circle cx="320" cy="125" r="14" fill="none" stroke={H} strokeWidth="1.5" />
    <circle cx="320" cy="125" r="4" fill={H} />
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        r="3.5"
        cy="125"
        fill={H}
        animate={{ cx: [150, 306], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
      />
    ))}
  </SVG>
);

// Lightweight API Gateway — clients → gateway → services
const CoverGateway: React.FC = () => {
  const ys = [72, 125, 178];
  return (
    <SVG>
      {ys.map((y, i) => (
        <line key={`l${i}`} x1="84" y1={y} x2="176" y2="125" stroke={A} strokeWidth="1" opacity="0.3" />
      ))}
      {ys.map((y, i) => (
        <line key={`r${i}`} x1="224" y1="125" x2="316" y2={y} stroke={A} strokeWidth="1" opacity="0.3" />
      ))}
      <rect x="176" y="100" width="48" height="50" rx="9" fill={A} opacity="0.15" stroke={H} strokeWidth="1.5" />
      <text x="200" y="129" textAnchor="middle" fontSize="9" fill={H} fontFamily="monospace">
        API
      </text>
      {ys.map((y, i) => (
        <circle key={`c${i}`} cx="72" cy={y} r="7" fill="none" stroke={A} strokeWidth="1.5" />
      ))}
      {ys.map((y, i) => (
        <circle key={`s${i}`} cx="328" cy={y} r="7" fill="none" stroke={A} strokeWidth="1.5" />
      ))}
      {ys.map((y, i) => (
        <motion.circle
          key={`p${i}`}
          r="3"
          fill={H}
          animate={{ cx: [72, 200, 328], cy: [y, 125, ys[(i + 1) % 3]], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
        />
      ))}
    </SVG>
  );
};

// AI Personal Finance — bars + forecast line
const CoverFinance: React.FC = () => (
  <SVG>
    <line x1="70" y1="190" x2="340" y2="190" stroke={A} strokeWidth="1" opacity="0.3" />
    {[0, 1, 2, 3, 4].map((i) => {
      const h = 34 + i * 14;
      return (
        <motion.rect
          key={i}
          x={92 + i * 30}
          width="16"
          rx="3"
          fill={A}
          opacity="0.25"
          initial={{ height: 0, y: 190 }}
          whileInView={{ height: h, y: 190 - h }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: i * 0.12, ease: "easeOut" }}
        />
      );
    })}
    <motion.path
      d="M80,168 L110,152 L140,158 L170,122 L200,112 L230,84"
      fill="none"
      stroke={H}
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
    />
    <path
      d="M230,84 L270,68 L310,44"
      fill="none"
      stroke={H}
      strokeWidth="2.5"
      strokeDasharray="5 5"
      opacity="0.55"
    />
    <motion.circle
      r="4"
      fill="#fff"
      animate={{ cx: [80, 230], cy: [168, 84] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  </SVG>
);

// Smart Inbox Classifier — envelopes sorting into buckets
const CoverInbox: React.FC = () => (
  <SVG>
    {[92, 182, 272].map((x, i) => (
      <path
        key={i}
        d={`M${x},172 L${x},204 L${x + 62},204 L${x + 62},172`}
        fill="none"
        stroke={A}
        strokeWidth="1.5"
        opacity="0.5"
      />
    ))}
    {[0, 1, 2].map((i) => {
      const x = 92 + i * 90 + 19;
      return (
        <motion.g
          key={i}
          animate={{ y: [0, 118], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.7, ease: "easeIn" }}
        >
          <rect x={x} y="52" width="24" height="17" rx="2" fill={H} opacity="0.85" />
          <path d={`M${x},52 l12,9 l12,-9`} fill="none" stroke="#fff" strokeWidth="1" opacity="0.7" />
        </motion.g>
      );
    })}
  </SVG>
);

// Voice Command Assistant — mic + waveform
const CoverVoice: React.FC = () => {
  const bars = [26, 46, 70, 40, 62, 34, 54, 44, 66, 30];
  return (
    <SVG>
      <circle cx="96" cy="125" r="26" fill={A} opacity="0.12" />
      <motion.circle
        cx="96"
        cy="125"
        r="26"
        fill="none"
        stroke={H}
        strokeWidth="1.5"
        animate={{ r: [26, 42], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <rect x="88" y="112" width="16" height="22" rx="8" fill="none" stroke={H} strokeWidth="1.5" />
      <path d="M84,128 a12,12 0 0 0 24,0 M96,140 v6" stroke={H} strokeWidth="1.5" fill="none" />
      {bars.map((h, i) => {
        const x = 150 + i * 19;
        return (
          <motion.rect
            key={i}
            x={x}
            width="8"
            rx="4"
            fill={H}
            opacity="0.7"
            animate={{ height: [h * 0.4, h, h * 0.4], y: [125 - h * 0.2, 125 - h / 2, 125 - h * 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          />
        );
      })}
    </SVG>
  );
};

const COVERS: Record<string, React.FC> = {
  p1: CoverKnowledge,
  p2: CoverFace,
  p3: CoverFinance,
  p4: CoverVoice,
  p5: CoverInbox,
  p6: CoverGateway,
};

const CATEGORY_FALLBACK: Record<string, React.FC> = {
  Security: CoverFace,
  "Full Stack": CoverGateway,
  "AI/ML": CoverKnowledge,
};

export const ProjectCover: React.FC<{ id?: string; category: string }> = ({
  id,
  category,
}) => {
  const Cover =
    (id && COVERS[id]) || CATEGORY_FALLBACK[category] || CoverKnowledge;
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-elevated to-surface">
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
      <Cover />
    </div>
  );
};
