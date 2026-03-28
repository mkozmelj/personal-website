import { Layout } from "@/components/layout";
import { Projects } from "@/components/projects";
import { SeoHead } from "@/components/seo/SeoHead";

export default function ProjectsPage() {
  return (
    <>
      <SeoHead
        title="Projects"
        description="Selected web projects — Next.js, WordPress, React, and more."
        path="/projects"
      />
      <Layout>
        <Projects pageHeading />
      </Layout>
    </>
  );
}
