import { skillGroups } from "../data/skills.ts";
import { toneStyle } from "../lib/tone.ts";
import { Icon } from "./Icon.tsx";
import "./Skills.css";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <div className="wrap">
        <div className="head" data-r>
          <p className="kicker">Tech stack</p>
          <h2 className="h2" id="skills-h">
            Tools of the trade
          </h2>
        </div>
        <div className="grid">
          {skillGroups.map(({ title, icon, tone, skills }, index) => (
            <article
              key={title}
              className="skill card glass lift s4 m6"
              data-r
              style={{ "--i": index % 3, ...toneStyle(tone) }}
            >
              <header>
                <i className="ico" aria-hidden="true">
                  <Icon name={icon} />
                </i>
                <h3 className="h4">{title}</h3>
              </header>
              <ul className="chips">
                {skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
