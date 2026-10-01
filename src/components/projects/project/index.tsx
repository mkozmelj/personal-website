import Image from "next/image";
import { IProject } from "@/common/types";
import { ARROW_NUDGE, NewTabHint } from "@/components/common/links";
import { TagList } from "@/components/common/tag";
import { ArrowUpRight } from "@/components/icons";

interface IProps {
  project: IProject;
}

const THUMB =
  "aspect-video w-full rounded-sm border border-border transition-colors duration-fast lg:aspect-auto lg:h-[72px] lg:w-32 lg:group-hover:border-border-strong";

/** Home project card: thumbnail left on desktop, full-width image on mobile */
export function Project({ project }: IProps) {
  return (
    <li className="group relative flex flex-col gap-2 lg:-mx-6 lg:grid lg:grid-cols-[128px_minmax(0,1fr)] lg:gap-6 lg:rounded-md lg:border lg:border-transparent lg:p-6 lg:transition-colors lg:duration-fast lg:ease-out lg:hover:border-border lg:hover:bg-surface">
      {project.imageUrl ? (
        <Image
          src={project.imageUrl}
          alt={`Screenshot of the ${project.title} website`}
          width={640}
          height={360}
          sizes="(min-width: 1024px) 128px, 100vw"
          className={`${THUMB} object-cover`}
        />
      ) : (
        <div
          className={`${THUMB} flex items-center justify-center bg-surface-raised font-mono text-tag text-text-subtle`}
        >
          Screenshot
        </div>
      )}
      <div className="mt-2 flex flex-col gap-2 lg:mt-0 lg:gap-3">
        <h3 className="text-h3 text-text">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener"
              className="transition-colors duration-fast after:absolute after:inset-0 after:rounded-md focus-visible:shadow-none focus-visible:after:shadow-focus lg:group-hover:text-accent"
            >
              {project.title}
              <ArrowUpRight
                className={`ml-1 hidden align-[-2px] lg:inline-block ${ARROW_NUDGE}`}
              />
              <NewTabHint />
            </a>
          ) : (
            project.title
          )}{" "}
          <span className="font-mono text-[13px] font-normal leading-5 text-text-subtle lg:leading-[26px]">
            {project.year}
          </span>
        </h3>
        <p className="text-body-sm text-text-muted">{project.summary}</p>
        <TagList tags={project.homeTags ?? project.tags} />
      </div>
    </li>
  );
}
