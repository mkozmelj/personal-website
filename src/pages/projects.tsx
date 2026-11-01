import { Layout } from "@/components/layout";
import { ProjectRows, ProjectsTable } from "@/components/projects";
import { SeoHead } from "@/components/seo/SeoHead";

export default function ProjectsPage() {
  return (
    <>
      <SeoHead
        title="Projects"
        description="Selected projects by Martin Kozmelj — client websites and side projects built with React, Next.js and TypeScript, including AI-assisted builds."
        path="/projects"
      />
      <Layout
        hero={{
          title: "Projects",
          note: "clinics, coaches, clubs, and a ski club I'm in",
          lead: "Websites, shops and web apps I've built for clinics, coaches, clubs and small businesses since 2019.",
        }}
      >
        <article className="flex flex-col gap-6">
          <ProjectsTable />
          <ProjectRows />
        </article>
      </Layout>
    </>
  );
}
