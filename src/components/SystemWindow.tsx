import type { Tone } from "../lib/tone.ts";
import { toneStyle } from "../lib/tone.ts";
import { Icon } from "./Icon.tsx";
import type { IconName } from "./Icon.tsx";
import "./SystemWindow.css";

const LAYERS: { name: string; detail: string; icon: IconName; tone: Tone }[] = [
  { name: "Interface", detail: "React · Next.js · D3", icon: "screen", tone: 1 },
  { name: "Identity", detail: "SAML 2.0 · OIDC · OAuth 2.0 · zero-trust", icon: "shield", tone: 2 },
  { name: "Services", detail: "FastAPI · Django (ASGI) · Spring Batch", icon: "server", tone: 3 },
  { name: "Intelligence", detail: "LangGraph agents · MCP tools · RAG", icon: "spark", tone: 4 },
  { name: "Data", detail: "PostgreSQL · Redis · pgvector", icon: "db", tone: 5 },
];

/** The hero illustration: a production system drawn as five layers with a pulse travelling down. */
export function SystemWindow() {
  return (
    <div className="stage">
      <div
        className="sys glass enter"
        style={{ "--i": 2 }}
        role="img"
        aria-label="Illustration of a production system in layers: interface, identity, services, intelligence and data"
      >
        <div className="sys-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>production-system.arch</span>
          <em>Illustrative</em>
        </div>
        <ol className="layers" aria-hidden="true">
          {LAYERS.map(({ name, detail, icon, tone }, index) => (
            <li key={name} className="layer tile" style={{ "--n": index, ...toneStyle(tone) }}>
              <i>
                <Icon name={icon} />
              </i>
              <div>
                <b>{name}</b>
                <small>{detail}</small>
              </div>
            </li>
          ))}
        </ol>
        <div className="hud tile" aria-hidden="true">
          <p>Current focus</p>
          <p>Agentic AI &amp; Identity Security</p>
        </div>
      </div>

      <div className="float f1 glass" aria-hidden="true" style={{ "--i": 5, ...toneStyle(1) }}>
        <i>
          <Icon name="code" />
        </i>
        <div>
          <small>Experience</small>
          <b>6+ Years</b>
        </div>
      </div>
      <div className="float f2 glass" aria-hidden="true" style={{ "--i": 7, ...toneStyle(5) }}>
        <i>
          <Icon name="db" />
        </i>
        <div>
          <small>Stack</small>
          <b>Full-Stack + ML</b>
        </div>
      </div>
    </div>
  );
}
