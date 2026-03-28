import { Contact } from "@/components/contact";
import { Copyright } from "@/components/copyright";
import { Experiences } from "@/components/experiences";
import { Projects } from "@/components/projects";
import { Summary } from "@/components/summary";
import { Layout } from "@/components/layout";
import { SeoHead } from "@/components/seo/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead path="/" />
      <Layout>
        <div className="flex flex-col gap-8">
          <Summary />
          <Experiences showedExperiences={3} />
          <Projects showedProjects={3} />
          <Contact />
        </div>
        <footer>
          <Copyright />
        </footer>
      </Layout>
    </>
  );
}
