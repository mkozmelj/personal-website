import { NewTabHint } from "@/components/common/links";
import { TagList } from "@/components/common/tag";
import { ArrowUpRight } from "@/components/icons";
import { projects } from "@/data/projects";
import { Project } from "./project";

type Props = {
  showedProjects: number;
};

/** Home list: the latest projects as cards */
export function Projects({ showedProjects }: Readonly<Props>) {
  return (
    <ol className="flex flex-col gap-10 lg:gap-2">
      {projects.slice(0, showedProjects).map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </ol>
  );
}

const TH =
  "border-b border-border pb-3 text-left font-mono text-label uppercase text-text-subtle";
const TD = "border-b border-border py-5 align-top";

/** /projects on desktop (≥ lg) */
export function ProjectsTable() {
  return (
    <table className="mt-4 hidden w-full border-collapse lg:table">
      <thead>
        <tr>
          <th scope="col" className={`${TH} pr-4`}>
            Year
          </th>
          <th scope="col" className={`${TH} pr-4`}>
            Project
          </th>
          <th scope="col" className={`${TH} pr-4`}>
            Built with
          </th>
          <th scope="col" className={TH}>
            <span className="sr-only">Link</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.title} className="group">
            <td
              className={`${TD} w-16 pr-4 font-mono text-[13px] leading-[26px] text-text-subtle`}
            >
              {project.year}
            </td>
            <td className={`${TD} pr-4`}>
              <p className="text-base font-semibold leading-[26px] text-text transition-colors duration-fast group-hover:text-accent">
                {project.title}
              </p>
              <p className="mt-1 text-body-sm text-text-muted">
                {project.summary}
              </p>
            </td>
            <td className={`${TD} pr-4`}>
              <TagList tags={project.tags} compact />
            </td>
            <td className={`${TD} text-right`}>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Visit ${project.title} (opens in a new tab)`}
                  className="group/visit -mr-3 -mt-[9px] inline-flex size-11 items-center justify-center rounded-full text-text-muted transition-colors duration-fast hover:bg-surface hover:text-accent-hover"
                >
                  <ArrowUpRight className="transition-transform duration-base ease-out group-hover/visit:-translate-y-0.5 group-hover/visit:translate-x-0.5" />
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** /projects on mobile (< lg) */
export function ProjectRows() {
  return (
    <ul className="mt-2 lg:hidden">
      {projects.map((project) => (
        <li
          key={project.title}
          className="flex flex-col gap-1.5 border-b border-border py-5 first:border-t"
        >
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-base font-semibold leading-6 text-text">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1"
                >
                  {project.title}
                  <ArrowUpRight size={14} className="shrink-0" />
                  <NewTabHint />
                </a>
              ) : (
                project.title
              )}
            </h3>
            <span className="font-mono text-meta text-text-subtle">
              {project.year}
            </span>
          </div>
          <p className="text-body-sm text-text-muted">{project.summary}</p>
          <TagList tags={project.tags} compact />
        </li>
      ))}
    </ul>
  );
}
