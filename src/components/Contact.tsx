import { profile } from "../data/profile.ts";
import { Icon } from "./Icon.tsx";
import { SocialLinks } from "./SocialLinks.tsx";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="contact-grid">
          <div data-r>
            <p className="kicker">Contact</p>
            <h2 id="contact-h">
              Let's build
              <br />
              <em>something</em>
              <br />
              <span className="grad">intelligent.</span>
            </h2>
            <a className="mail" href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              {profile.email}
            </a>
          </div>
          <div className="contact-side" data-r style={{ "--i": 1 }}>
            <p className="lead">
              Whether you need to scale AI infrastructure, integrate complex LLMs, or secure your
              enterprise identity stack — I'd love to help.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
