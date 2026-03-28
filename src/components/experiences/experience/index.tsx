import { IExperience } from "@/common/types";
import { Tag } from "@/components/common/tag";

interface IProps {
  experience: IExperience;
}

export function Experience({ experience }: IProps) {
  return (
    <a
      href={experience.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full hover:bg-primary/10 p-4 rounded-md hover:ring-1 hover:ring-inset hover:ring-primary hover:cursor-pointer text-inherit no-underline"
    >
      <div className="flex md:space-x-4 items-center flex-col md:flex-row">
        <p className="text-xs text-muted w-max">
          {experience.start} - {experience.end ?? "PRESENT"}
        </p>
        <h3 className="text-inherit">
          {experience.position} · {experience.company}
        </h3>
      </div>
      <div className="font-thin mt-1 text-sm">{experience.summary}</div>
      <div className="mt-4 flex flex-wrap gap-2 justify-start">
        {experience.tags.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
    </a>
  );
}
