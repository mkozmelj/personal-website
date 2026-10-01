import { IExperience } from "@/common/types";

export const experiences: IExperience[] = [
  {
    position: "Senior Software Engineer",
    company: "Sportradar",
    companyUrl: "https://sportradar.com/",
    start: 2022,
    summary:
      "In the first two years I worked as a frontend developer in the Mobile unit, mostly on admin dashboards for settings used in mobile applications, and I held a part-time position as Scrum master. In September 2024 I moved to the team building the moderation interface.",
    homeSummary:
      "Two years as a frontend developer in the Mobile unit, building admin dashboards for settings used in mobile apps, with a part-time role as Scrum master. Since September 2024 I've worked on the moderation interface.",
    tags: [
      "Remix",
      "Next.js",
      "React",
      "TypeScript",
      "AWS",
      "GitLab CI/CD",
      "Angular",
      "Scrum",
    ],
  },
  {
    position: "Founder",
    company: "Računalniške storitve in svetovanje",
    companyUrl: "https://kozmelj.si",
    start: 2022,
    summary:
      "In 2022 I started working as a freelancer. I work on different projects for different clients, from simple websites to more complex full-stack applications.",
    homeSummary:
      "Freelance work for different clients, from simple websites to more complex full-stack applications.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Sanity",
      "WordPress",
      "Vercel",
    ],
  },
  {
    position: "Frontend developer (freelance)",
    homePosition: "Frontend developer",
    company: "Indigo Labs",
    companyUrl: "https://indigo.si",
    start: 2022,
    summary:
      "I joined the team working on a project for a Slovenian spa, and I still help them on other projects when the need arises.",
    homeSummary:
      "I joined the team on a project for a Slovenian spa, and I still help out on other projects when the need arises.",
    tags: ["Angular", "TypeScript"],
  },
  {
    position: "Full-stack developer (freelance)",
    company: "Norik Systems",
    companyUrl: "https://norik.com",
    start: 2022,
    summary:
      "After I left the company, I helped them onboard a new lead, and I still work with them on different projects.",
    tags: [
      "React",
      "TypeScript",
      "Nest.js",
      "Project management",
      "Server management",
    ],
  },
  {
    position: "Frontend developer (freelance)",
    company: "Algoritmik",
    companyUrl: "https://www.algoritmik.net/",
    start: 2023,
    end: 2023,
    summary:
      "I joined a project for a large UK client in the logistics sector. My main work was a refactor of the existing customs form.",
    tags: ["React", "TypeScript", "GitLab CI/CD"],
  },
  {
    position: "Full-stack developer & team lead",
    company: "Norik Systems",
    companyUrl: "https://norik.com",
    start: 2020,
    end: 2022,
    summary:
      "I started as a full-stack developer in a small agency-style company and soon moved up to lead a team of five developers. I managed a mix of projects and stayed hands-on while leading, which kept delivery on track.",
    tags: [
      "React",
      "Nest.js",
      "Firebase",
      "PostgreSQL",
      "SendGrid",
      "Strava API",
      "Garmin API",
      "GitHub",
      "Docker",
      "Project management",
    ],
  },
  {
    position: "Full-stack developer",
    company: "Laboratory of Multimedia",
    companyUrl: "https://ltfe.org/",
    start: 2016,
    end: 2020,
    summary:
      "As a student at the university, I helped develop an e-learning system during the COVID-19 pandemic. I focused on its video features, so professors could move their teaching online without friction.",
    tags: [
      "Meteor.js",
      "HTML5",
      "CSS",
      "JavaScript",
      "MongoDB",
      "xAPI",
      "Linux",
    ],
  },
];

/** "2022 — Present", "2020 — 2022", or just "2023" for a single year */
export function formatPeriod({ start, end }: IExperience) {
  if (end === start) return `${start}`;
  return `${start} — ${end ?? "Present"}`;
}
