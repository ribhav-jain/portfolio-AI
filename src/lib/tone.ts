import type { CSSProperties } from "react";

/** One of the five accent tones defined as --t1 to --t5 in styles/tokens.css. */
export type Tone = 1 | 2 | 3 | 4 | 5;

/** Style that sets --c, the colour icon tiles pick up, to the given tone. */
export function toneStyle(tone: Tone): CSSProperties {
  return { "--c": `var(--t${tone})` };
}
