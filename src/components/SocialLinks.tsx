import type { CSSProperties } from "react";
import { socials } from "../data/profile.ts";
import { cx } from "../lib/cx.ts";
import { Icon } from "./Icon.tsx";
import "./SocialLinks.css";

interface SocialLinksProps {
  className?: string;
  style?: CSSProperties;
}

/** Profile links as icon chips, used in the hero and (restyled larger) in the Contact section. */
export function SocialLinks({ className, style }: SocialLinksProps) {
  return (
    <ul className={cx("social", className)} style={style} aria-label="Profiles">
      {socials.map(({ label, href, icon, solid }) => (
        <li key={label}>
          <a className="soc" href={href} target="_blank" rel="noreferrer me">
            <Icon name={icon} solid={solid} />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
