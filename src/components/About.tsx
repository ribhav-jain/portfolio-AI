import { profile } from "../data/profile.ts";
import { toneStyle } from "../lib/tone.ts";
import { AgentGraphArt, ServiceMeshArt, ShieldScanArt } from "./AboutArt.tsx";
import { Icon } from "./Icon.tsx";
import "./About.css";

/** The decorative code sample, as [token class, text] pairs. Classes: k keyword, f name, s string. */
const CODE_SAMPLE: [className: string | null, text: string][] = [
  ["k", "class"],
  [null, " "],
  ["f", "Engineer"],
  [null, " {\n  "],
  ["k", "stack"],
  [null, " = [\n    "],
  ["s", "'LangGraph'"],
  [null, ", "],
  ["s", "'FastAPI'"],
  [null, ",\n    "],
  ["s", "'TensorFlow'"],
  [null, ",\n  ];\n  "],
  ["k", "async"],
  [null, " "],
  ["f", "deploy"],
  [null, "() {\n    "],
  ["k", "return"],
  [null, " this."],
  ["f", "scale"],
  [null, "();\n  }\n}"],
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="intro">
          <div data-r>
            <p className="kicker">About me</p>
            <h2 className="h2" id="about-h">
              Engineering <span className="grad">intelligence</span>
              <br />
              into enterprise systems.
            </h2>
          </div>
          <div data-r style={{ "--i": 1 }}>
            <p className="about-p">{profile.about}</p>
            <ul className="chips">
              <li className="chip">
                <Icon name="pin" />
                Based in {profile.location}
              </li>
              <li className="chip">
                <Icon name="bolt" />
                {profile.experience} Experience
              </li>
            </ul>
          </div>
        </div>

        <div className="grid">
          <article className="bento card glass lift s8" data-r style={toneStyle(1)}>
            <div className="vis" aria-hidden="true">
              <AgentGraphArt />
            </div>
            <i className="ico" aria-hidden="true">
              <Icon name="bolt" />
            </i>
            <h3 className="h3">AI &amp; Machine Learning</h3>
            <p className="sub">
              Designing production agentic systems — multi-agent <strong>LangGraph</strong>{" "}
              orchestration, governed <strong>MCP</strong> tooling, and <strong>RAG</strong> — plus
              the ML that powers anomaly detection.
            </p>
          </article>

          <article
            className="bento card glass lift s4 m6"
            data-r
            style={{ "--i": 1, ...toneStyle(3) }}
          >
            <div className="vis full" aria-hidden="true">
              <ServiceMeshArt />
            </div>
            <i className="ico" aria-hidden="true">
              <Icon name="server" />
            </i>
            <h3 className="h3">Backend Architecture</h3>
            <p className="sub">
              Scalable services with <strong>FastAPI</strong> &amp; <strong>Django (ASGI)</strong>,
              plus high-volume Spring Batch pipelines.
            </p>
          </article>

          <article className="bento card glass lift s4 m6" data-r style={toneStyle(2)}>
            <div className="vis full" aria-hidden="true">
              <ShieldScanArt />
            </div>
            <i className="ico" aria-hidden="true">
              <Icon name="shield" />
            </i>
            <h3 className="h3">IAM &amp; Security</h3>
            <p className="sub">
              Enterprise identity with <strong>OAuth2</strong>, <strong>SAML</strong> &amp;{" "}
              <strong>OIDC</strong>, plus insider-threat detection.
            </p>
          </article>

          <article
            className="bento card glass lift s8"
            data-r
            style={{ "--i": 1, ...toneStyle(5) }}
          >
            <div className="codecard">
              <div>
                <i className="ico" aria-hidden="true">
                  <Icon name="code" />
                </i>
                <h3 className="h3">Full-Stack Engineering</h3>
                <p className="sub">
                  Bridging data and design — accessible (WCAG 2.0), interactive dashboards built
                  with <strong>React</strong> &amp; <strong>Next.js</strong>.
                </p>
              </div>
              <pre className="code tile" aria-hidden="true">
                {CODE_SAMPLE.map(([className, text], index) =>
                  className ? (
                    <span key={index} className={className}>
                      {text}
                    </span>
                  ) : (
                    text
                  ),
                )}
              </pre>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
