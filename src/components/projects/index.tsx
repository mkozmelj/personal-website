import { IProject } from "@/common/types";
import { Project } from "./project";
import { Title } from "../common/title";
import { useMemo } from "react";
import Link from "next/link";

type Props = {
  showedProjects?: number;
};

export function Projects({ showedProjects }: Readonly<Props>) {
  const projects: IProject[] = useMemo(
    () => [
      {
        imageUrl: "/estetika-verdnik.webp",
        title: "Estetika Verdnik",
        year: 2024,
        tags: ["Next.js", "Vercel"],
        link: "https://estetikaverdnik.si",
        summary: "Business website for plastic surgeon.",
      },
      {
        imageUrl: "/snezak.webp",
        title: "Smučarsko društvo Snežak Celje",
        year: 2024,
        tags: ["Wordpress", "Elementor"],
        link: "https://snezak-celje.com",
        summary:
          "Website for local skiing club of which I myself am a member. All informations about skiing school and other news for club members can be found on the website.",
      },
      {
        imageUrl: "/druga-runda.png",
        title: "Druga runda",
        year: 2023,
        tags: ["Wordpress", "Elementor"],
        link: "https://drugarunda.si",
        summary:
          "Blog about cycling, not only, but mainly road cycling, be it asphalt or gravel roads.",
      },
      {
        imageUrl: "/tenistrje.png",
        title: "Tenis liga Trje",
        year: 2023,
        tags: ["React", "Google Spreadsheet API", "CI/CD"],
        link: "https:/tenisligatrje.si",
        summary: "Webapp with results and table for local tenis leagues.",
        githubLink: "https://github.com/mkozmelj/Tenis-league-app",
      },
      {
        imageUrl: "/skz.png",
        title: "Študentski klub Žalec",
        year: 2020,
        tags: ["Wordpress", "PDF Forms"],
        link: "https://sk-zalec.org",
        summary:
          "Presentational website for local student organization. On the website members can fill out multipart signup form to join the organization.",
      },
      {
        imageUrl: "/spiritbra.png",
        title: "Spiritbra",
        year: 2019,
        tags: ["Wordpress", "Woocommerce"],
        link: "https://spiritbra.si",
        summary: "E-shop for woman apparel - sport bras and bags.",
      },
    ],
    [],
  );

  const filteredProjects = useMemo(
    () => (showedProjects ? projects.slice(0, showedProjects) : projects),
    [projects, showedProjects],
  );

  return (
    <div className="mt-2 flex flex-col" id="projects">
      <Title title="Projects" />
      <div className="px-4 lg:p-0">
        {filteredProjects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
      {showedProjects && showedProjects < projects.length && (
        <Link
          className="bg-primary/50 hover:bg-primary/30 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-xl m-auto mt-2"
          href="/projects"
        >
          Show more
        </Link>
      )}
    </div>
  );
}
