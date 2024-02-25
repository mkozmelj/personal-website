import { IProject } from "@/common/types";
import { Tag } from "@/components/common/tag";
import Image from "next/image";

interface IProps {
  project: IProject;
}

export function Project({ project }: IProps) {
  return (
    <div
      className="mb-5 w-full hover:bg-primary/10 p-4 rounded-md hover:ring-1  hover:ring-inset  hover:ring-primary hover:cursor-pointer"
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <Image
          alt={project.title}
          src={project.imageUrl}
          width={100}
          height={100}
          className="w-full lg:w-1/4 h-fit"
        />
        <div>
          <h3>
            {project.title} (
            <span className="font-extralight">{project.year}</span>)
          </h3>
          <p className="mt-1 font-thin text-sm">{project.summary}</p>
          {project.githubLink && (
            <a
              className="mt-1 text-xs hover:underline hover:text-primary"
              href={project.githubLink}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
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
    </div>
  );
}
