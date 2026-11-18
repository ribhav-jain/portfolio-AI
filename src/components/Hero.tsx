import { profile, stats } from "../data/profile.ts";
import { Icon } from "./Icon.tsx";
import { SocialLinks } from "./SocialLinks.tsx";
import { SystemWindow } from "./SystemWindow.tsx";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="hello enter">
              <i className="live" aria-hidden="true" />
              Hi, I'm {profile.name}
              <i className="caret" aria-hidden="true" />
            </p>
            <h1 className="h1 enter" style={{ "--i": 1 }}>
              Building the
              <br />
              <span className="grad">future of logic.</span>
            </h1>
            <p className="lead enter" style={{ "--i": 2 }}>
              {profile.tagline}
            </p>
            <div className="cta enter" style={{ "--i": 3 }}>
              <a className="btn primary" href="#projects">
                View featured work <Icon name="right" />
              </a>
              {profile.cvUrl && (
                <a className="btn" href={profile.cvUrl} download>
                  Download CV <Icon name="download" />
                </a>
              )}
            </div>
            <SocialLinks className="enter" style={{ "--i": 4 }} />
          </div>

          <SystemWindow />
        </div>

        <dl className="stats glass enter" style={{ "--i": 4 }}>
          {stats.map(({ value, label, detail }) => (
            <div key={label} className="stat">
              <dt className="num">{value}</dt>
              <dd>{label}</dd>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
