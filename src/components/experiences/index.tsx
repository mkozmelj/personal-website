import { experiences } from "@/data/experiences";
import { Experience } from "./experience";

type Props = {
  /** Home shows only the latest items, as linked cards */
  showedExperiences?: number;
};

export function Experiences({ showedExperiences }: Readonly<Props>) {
  const home = showedExperiences !== undefined;
  const items = home ? experiences.slice(0, showedExperiences) : experiences;

  return (
    <ol className={`flex flex-col lg:gap-2 ${home ? "gap-10" : "mt-2 gap-8"}`}>
      {items.map((experience) => (
        <Experience
          experience={experience}
          home={home}
          key={`${experience.company}-${experience.position}`}
        />
      ))}
    </ol>
  );
}
