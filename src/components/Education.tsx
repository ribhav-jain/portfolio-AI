import { certifications, education } from "../data/education.ts";
import { toneStyle } from "../lib/tone.ts";
import { Icon } from "./Icon.tsx";
import "./Education.css";

export function Education() {
  return (
    <section id="education" aria-label="Education and certifications">
      <div className="wrap edu">
        <div>
          <div className="edu-head" data-r>
            <i className="ico" style={toneStyle(1)} aria-hidden="true">
              <Icon name="cap" />
            </i>
            <h2 className="h2">Education</h2>
          </div>
          <article className="school card glass" data-r>
            <h3 className="h3">{education.degree}</h3>
            <p className="co">{education.school}</p>
            <p className="cap">{education.period}</p>
            <p className="sub">{education.summary}</p>
            <ul className="chips xs">
              {education.coursework.map((course) => (
                <li key={course} className="chip">
                  {course}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div>
          <div className="edu-head" data-r>
            <i className="ico" style={toneStyle(5)} aria-hidden="true">
              <Icon name="award" />
            </i>
            <h2 className="h2">Certifications</h2>
          </div>
          <ul className="certs">
            {certifications.map(({ title, issuer }, index) => (
              <li key={title} className="cert glass lift" data-r style={{ "--i": index }}>
                <Icon name="checkCircle" />
                <div>
                  <b>{title}</b>
                  <small>{issuer}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
