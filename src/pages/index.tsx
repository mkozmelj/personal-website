import { Contact } from "@/components/contact";
import { Copyright } from "@/components/copyright";
import { Experiences } from "@/components/experiences";
import { Projects } from "@/components/projects";
import { Summary } from "@/components/summary";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-8 ">
        <Summary />
        <Experiences showedExperiences={3} />
        <Projects showedProjects={3} />
        <Contact />
        <Copyright />
      </div>
    </Layout>
  );
}
