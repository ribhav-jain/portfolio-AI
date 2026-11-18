import type { ReactNode } from "react";
import { cx } from "../lib/cx.ts";

/** Stroke icons on a 24px grid. Brand marks (GitHub, LinkedIn) are drawn filled: pass `solid`. */
const ICONS = {
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  right: <path d="M5 12h14M13 6l6 6-6 6" />,
  download: <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6 6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  replay: <path d="M4 12a8 8 0 1 0 2.6-5.9M4 4v4.5h4.5" />,
  screen: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2.5" />
      <path d="M8.5 21h7M12 17v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 5.8V11c0 4.4 2.9 8.1 7 9.8 4.1-1.7 7-5.4 7-9.8V5.8L12 3Z" />
      <path d="m9 12 2.2 2.2 4-4.2" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4" width="17" height="7" rx="2" />
      <rect x="3.5" y="13" width="17" height="7" rx="2" />
      <path d="M7.5 7.5h.01M7.5 16.5h.01" />
    </>
  ),
  spark: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2-1.2 2.3-1.2-2.3-2.3-1.2 2.3-1.2Z" />
  ),
  stars: (
    <path d="M10 4l1.7 4.8L16.5 10.5l-4.8 1.7L10 17l-1.7-4.8L3.5 10.5l4.8-1.7ZM18 14l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9Z" />
  ),
  db: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),
  pulse: <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />,
  code: <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5" />,
  bolt: <path d="M13 3 5 13.5h6L10 21l8.5-11h-6L13 3Z" />,
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  bot: (
    <>
      <rect x="4.5" y="8" width="15" height="11" rx="3" />
      <path d="M12 8V4.5M9.5 13v1.5M14.5 13v1.5M2.5 13v2M21.5 13v2" />
      <circle cx="12" cy="3.5" r="1" />
    </>
  ),
  brain: (
    <path d="M9.5 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 5.5 1.5V5.5A2.5 2.5 0 0 0 9.5 4ZM14.5 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-5.5 1.5" />
  ),
  cap: (
    <path d="m2.5 9.5 9.5-4.5 9.5 4.5-9.5 4.5-9.5-4.5ZM6.5 11.5V16c1.5 1.5 3.4 2.2 5.5 2.2s4-.7 5.5-2.2v-4.5M21.5 9.5V15" />
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.8 13.8-1.3 7.2 4.5-2.5 4.5 2.5-1.3-7.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 6 8-6" />
    </>
  ),
  send: <path d="M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4 17-6.5Z" />,
  chat: <path d="M20 12a7.5 7.5 0 0 1-11 6.6L4 20l1.4-4.5A7.5 7.5 0 1 1 20 12Z" />,
  github: (
    <path d="M12 1.5a10.5 10.5 0 0 0-3.3 20.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.8-1.2-4.8-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.5 4.9-4.8 5.2.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5Z" />
  ),
  linkedin: (
    <path d="M5 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.2 9.5h3.6V20.5H3.2V9.5Zm5.8 0h3.4V11h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v5.8h-3.6v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2H9V9.5Z" />
  ),
  hackerrank: <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5ZM9.5 8.5v7M14.5 8.5v7M9.5 12h5" />,
  kaggle: <path d="M7.5 3.5v17M7.5 14.5 16 6M11 11.5l5.5 9" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
  solid?: boolean;
  className?: string;
}

/** Decorative icon sized by the font-size of its parent. Label the control it sits in, not the icon. */
export function Icon({ name, solid = false, className }: IconProps) {
  return (
    <svg className={cx("i", solid && "solid", className)} viewBox="0 0 24 24" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}
