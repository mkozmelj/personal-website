import { Layout } from "@/components/layout";
import { Projects } from "@/components/projects";
import { SeoHead } from "@/components/seo/SeoHead";

export default function ProjectsPage() {
  return (
    <>
      <SeoHead
        title="Projects"
        description="Selected projects by Martin Kozmelj — client websites and side projects built with React, Next.js and TypeScript, including AI-assisted builds."
        path="/projects"
      />
      <Layout>
        <Projects pageHeading />
      </Layout>
    </>
  );
}
