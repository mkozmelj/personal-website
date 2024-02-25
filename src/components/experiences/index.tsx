import { IExperience } from "@/common/types";
import { Experience } from "./experience";
import { Title } from "../common/title";

export function Experiences() {
  const experiences: IExperience[] = [
    {
      position: "Senior SW Developer",
      company: "Sportradar",
      companyUrl: "https://sportradar.com/",
      start: 2022,
      summary:
        "Working as a frontend developer in a small, dynamic team of around 20 people. Specializing in crafting administrative UIs to seamlessly support and enhance mobile applications. Proven expertise in delivering efficient and user-friendly interfaces for optimal mobile user experiences.",
      tags: [
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
      position: "Full stack developer & Team lead",
      company: "Norik",
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
  ];
  return (
    <div className="mt-10" id="experiences">
      <Title title="Experiences" />
      <div className="px-4 lg-p-0">
        {experiences.map((experience) => (
          <Experience
            experience={experience}
            key={`${experience.company}-${experience.position}`}
          />
        ))}
      </div>
    </div>
  );
}
