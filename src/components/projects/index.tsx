import { IProject } from "@/common/types";
import { Project } from "./project";
import { Title } from "../common/title";

export function Projects() {
  const projects: IProject[] = [
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
  ];
  return (
    <div className="mt-10" id="projects">
      <Title title="Projects" />
      <div className="px-4 lg:p-0">
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
