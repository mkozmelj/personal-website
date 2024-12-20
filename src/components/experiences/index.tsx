import { IExperience } from "@/common/types";
import { Experience } from "./experience";
import { Title } from "../common/title";
import { useMemo } from "react";
import Link from "next/link";

type Props = {
  showedExperiences?: number;
};

export function Experiences({ showedExperiences }: Readonly<Props>) {
  const experiences: IExperience[] = useMemo(
    () => [
      {
        position: "Senior Software Developer",
        company: "Sportradar",
        companyUrl: "https://sportradar.com/",
        start: 2022,
        summary:
          "In the first two years I worked as a frontend developer in a Mobile unit. The projects that I worked on were mostly admin dashboards for different settings that were used in mobile applications. I also took a part time position as a Scrum master to improve workflow on some of the projects.\nI moved to another team in September 2024. There I started working on a moderation interface. I am always eager to help improving the workflows in all the teams I work. I am making suggestions all of the time and I can proudly say that most of them are not just taken into considerations but also included in the workflow.",
        tags: [
          "Remix",
          "Next.js",
          "React",
          "Typescript",
          "AWS",
          "CI/CD",
          "Gitlab",
          "Angular",
          "Scrum",
        ],
      },
      {
        position: "Frontend developer / Freelancer",
        company: "Indigo Labs",
        companyUrl: "https://indigo.si",
        start: 2022,
        summary:
          "I joined the team working on a project for a Slovenian spa. After that I am occasionally helping them on different projects when the need arises.",
        tags: ["Angular", "Typescript"],
      },
      {
        position: "Full stack developer / Freelancer",
        company: "Norik Systems",
        companyUrl: "https://norik.com",
        start: 2022,
        summary:
          "After I left the company I helped them with onboarding of a new lead. I still work with on different project and help him making decisions in tougher situations.",
        tags: [
          "React",
          "Typescript",
          "Project management",
          "Nest.js",
          "Server management",
        ],
      },
      {
        position: "Frontend developer / Freelancer",
        company: "Algoritmik",
        companyUrl: "https://www.algoritmik.net/",
        start: 2023,
        end: 2023,
        summary:
          "As a freelancer I joined the project for the big UK client that works in logistics sector. The main part of my work was a refactor of the existing customs form.",
        tags: ["React", "Typescript", "Gitlab", "CI/CD"],
      },
      {
        position: "Full stack developer & Team lead",
        company: "Norik Systems",
        companyUrl: "https://norik.com",
        start: 2020,
        end: 2022,
        summary:
          "Started as a Full-Stack Developer in a small agency-style company, swiftly advancing to lead a team of 5 developers. Managed diverse projects, fostering a dynamic team environment. My leadership role, balanced with hands-on involvement, ensured successful delivery across varied and challenging projects.",
        tags: [
          "React",
          "Nest.js",
          "Firebase",
          "Postgres",
          "Sendgrid",
          "Strava API",
          "Garmin API",
          "Github",
          "Docker",
          "Project management",
        ],
      },
      {
        position: "Full stack developer",
        company: "Laboratory of Multimedia",
        companyUrl: "https://ltfe.org/",
        start: 2016,
        end: 2020,
        summary:
          "As a student working at Universitym I contributed to the development of an e-learning system during the challenging times of the COVID-19 pandemic. Focused on enhancing the platform's video capabilities, enabling university professors to seamlessly transition to online teaching.",
        tags: ["Meteor.js", "HTML5", "CSS", "JS", "MongoDB", "xAPI", "Linux"],
      },
    ],
    [],
  );

  const filteredExperiences = useMemo(
    () =>
      showedExperiences
        ? experiences.slice(0, showedExperiences)
        : experiences.slice(),
    [experiences, showedExperiences],
  );

  return (
    <div className="mt-2 flex flex-col" id="experiences">
      <Title title="Experiences" />
      <div className="px-4 lg:p-0 mb-2">
        {filteredExperiences.map((experience) => (
          <Experience
            experience={experience}
            key={`${experience.company}-${experience.position}`}
          />
        ))}
      </div>
      {showedExperiences && showedExperiences < experiences.length && (
        <Link
          className="bg-primary/50 hover:bg-primary/30 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-xl m-auto mt-2"
          href="/experiences"
        >
          Show more
        </Link>
      )}
    </div>
  );
}
