import { useState } from "react";
import { socials } from "../data/profile.ts";
import { categoryLabels, projects } from "../data/projects.ts";
import type { Project, ProjectCategory } from "../data/projects.ts";
import { useLens } from "../hooks/useLens.ts";
import { Icon } from "./Icon.tsx";
import { ProjectCover } from "./ProjectCovers.tsx";
import "./Projects.css";

type Filter = "all" | ProjectCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ai", label: categoryLabels.ai },
  { value: "security", label: categoryLabels.security },
  { value: "fullstack", label: categoryLabels.fullstack },
];

const github = socials.find((social) => social.icon === "github");

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const lens = useLens<HTMLDivElement>(filter);

  return (
    <section id="projects" aria-labelledby="proj-h">
      <div className="wrap">
        <div className="proj-head">
          <div data-r>
            <p className="kicker">Selected work</p>
            <h2 className="h2" id="proj-h">
              Featured projects
            </h2>
          </div>
          <div className="seg filters glass" role="group" aria-label="Filter projects" {...lens}>
            <i className="lens" aria-hidden="true" />
            {FILTERS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tiles stay mounted and are hidden by the filter, so their animations keep running. */}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectTile
              key={project.title}
              project={project}
              column={index % 3}
              hidden={filter !== "all" && project.category !== filter}
            />
          ))}

          {github && (
            <article
              className="project more"
              data-r
              style={{ "--i": projects.length % 3 }}
              hidden={filter !== "all"}
            >
              <a
                className="cover"
                href={github.href}
                target="_blank"
                rel="noreferrer"
                aria-label="See all repositories on GitHub"
              >
                <span className="go" aria-hidden="true">
                  <Icon name="arrow" />
                </span>
                <Icon name="github" solid />
              </a>
              <div>
                <h3 className="h3">More on GitHub</h3>
                <p>The rest of my repositories, experiments and work in progress.</p>
                <div className="project-links">
                  <a className="link" href={github.href} target="_blank" rel="noreferrer">
                    {github.href.replace("https://", "")} <Icon name="arrow" />
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

interface ProjectTileProps {
  project: Project;
  /** Position in the three-column row; staggers the reveal. */
  column: number;
  hidden: boolean;
}

function ProjectTile({ project, column, hidden }: ProjectTileProps) {
  const { title, category, description, tags, cover, links } = project;
  const primaryLink = links.at(0);

  const coverContent = (
    <>
      <span className="cat">{categoryLabels[category]}</span>
      {primaryLink && (
        <span className="go" aria-hidden="true">
          <Icon name="arrow" />
        </span>
      )}
      <ProjectCover name={cover} />
    </>
  );

  return (
    <article className="project" data-r style={{ "--i": column }} hidden={hidden}>
      {primaryLink ? (
        <a
          className="cover"
          href={primaryLink.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${title}`}
        >
          {coverContent}
        </a>
      ) : (
        <div className="cover">{coverContent}</div>
      )}
      <div>
        <h3 className="h3">{title}</h3>
        <p>{description}</p>
        <ul className="chips xs">
          {tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
        {links.length > 0 && (
          <div className="project-links">
            {links.map(({ label, href }) => (
              <a key={href} className="link" href={href} target="_blank" rel="noreferrer">
                {label} <Icon name="arrow" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
