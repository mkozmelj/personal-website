import { Layout } from "@/components/layout";
import { Experiences } from "@/components/experiences";
import { SeoHead } from "@/components/seo/SeoHead";

export default function ExperiencesPage() {
  return (
    <>
      <SeoHead
        title="Experiences"
        description="Work history of Martin Kozmelj, senior software engineer at Sportradar — React, Next.js and TypeScript, team leadership and mentoring."
        path="/experiences"
      />
      <Layout>
        <Experiences pageHeading />
      </Layout>
    </>
  );
}
