import { roles } from "../data/experience.ts";
import type { Role } from "../data/experience.ts";
import { cx } from "../lib/cx.ts";
import { AgentRun } from "./AgentRun.tsx";
import "./Experience.css";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="xp-h">
      <div className="wrap">
        <div className="head" data-r>
          <p className="kicker">Career path</p>
          <h2 className="h2" id="xp-h">
            Professional journey
          </h2>
        </div>

        <ol className="tl">
          {roles.map((role) => (
            <RoleEntry key={`${role.title} ${role.period}`} role={role} />
          ))}
        </ol>
      </div>
    </section>
  );
}

/** One timeline row: the dates on the rail side and the role card beside them. */
function RoleEntry({ role }: { role: Role }) {
  const { period, title, company, summary, highlights, tags, current, metric, demo } = role;

  const details = (
    <>
      <h3 className="h3">{title}</h3>
      <p className="co">{company}</p>
      <p className="sub">{summary}</p>
      {highlights.length > 0 && (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      <ul className="chips xs">
        {tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
  const aside = demo === "agent-run" ? <AgentRun /> : metric ? <Metric {...metric} /> : null;

  return (
    <li className={cx("tl-item", !current && "past")}>
      <div className="when" data-r>
        <time>{period}</time>
        {current && <span className="now">Now</span>}
      </div>
      {/* The card with the interactive demo does not lift on hover: it would move under the pointer. */}
      <article className={cx("xp card glass", !demo && "lift")} data-r>
        {aside ? (
          <div className={cx("split", demo && "wide")}>
            <div>{details}</div>
            {aside}
          </div>
        ) : (
          details
        )}
      </article>
    </li>
  );
}

function Metric({ value, label, chart }: NonNullable<Role["metric"]>) {
  if (!chart) {
    return (
      <div className="result tile">
        <p className="big grad num">{value}</p>
        <p className="cap">{label}</p>
      </div>
    );
  }
  return (
    <figure className="result tile">
      <p className="big grad num">{value}</p>
      <p className="cap">{label}</p>
      <svg
        viewBox="0 0 200 60"
        role="img"
        aria-label="Illustrative chart: reconstruction error crossing a threshold twice"
      >
        <path d="M0 18H200" stroke="var(--fg4)" strokeWidth="1" strokeDasharray="3 4" fill="none" />
        <path
          d="M0 48 10 45 20 50 30 44 40 47 50 42 60 46 70 12 80 44 90 48 100 43 110 47 120 41 130 45 140 8 150 44 160 48 170 42 180 46 190 44 200 47"
          fill="none"
          stroke="var(--fg3)"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="70" cy="12" r="3.5" fill="var(--accent)" />
        <circle cx="70" cy="12" r="7" fill="var(--accent)" opacity=".18" />
        <circle cx="140" cy="8" r="3.5" fill="var(--accent)" />
        <circle cx="140" cy="8" r="7" fill="var(--accent)" opacity=".18" />
      </svg>
      <figcaption>Illustrative: reconstruction error against a threshold</figcaption>
    </figure>
  );
}
