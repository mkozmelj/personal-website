import { IProject } from "@/common/types";
import { Tag } from "@/components/common/tag";
import Image from "next/image";

interface IProps {
  project: IProject;
}

export function Project({ project }: IProps) {
  const headingId = `project-heading-${project.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article className="relative mb-5 w-full rounded-md p-4 hover:bg-primary/10 hover:ring-1 hover:ring-inset hover:ring-primary">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0 rounded-md"
        aria-labelledby={headingId}
      />
      <div className="relative z-10 flex flex-col gap-4 lg:flex-row pointer-events-none">
        <Image
          alt={project.title}
          src={project.imageUrl}
          width={100}
          height={100}
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="pointer-events-none h-fit w-full lg:w-1/4"
        />
        <div>
          <h3 id={headingId} className="text-inherit">
            {project.title} (
            <span className="font-extralight">{project.year}</span>)
          </h3>
          <p className="mt-1 font-thin text-sm">{project.summary}</p>
          {project.githubLink && (
            <a
              className="pointer-events-auto relative z-20 mt-1 text-xs hover:text-primary hover:underline"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          )}
          <div className="mt-4 flex flex-wrap gap-2 justify-start">
            {project.tags.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
