import { PageSection } from "@/components/common/section";
import { Experiences } from "@/components/experiences";
import { Layout } from "@/components/layout";
import { SeoHead } from "@/components/seo/SeoHead";

export default function ExperiencesPage() {
  return (
    <>
      <SeoHead
        title="Experience"
        description="Work history of Martin Kozmelj, senior software engineer at Sportradar — React, Next.js and TypeScript, team leadership and mentoring."
        path="/experiences"
      />
      <Layout>
        <PageSection
          title="Experience"
          lead="From a university lab and a small agency, where I led a team of five, to a 4,000+ person company, with freelance work alongside."
        >
          <Experiences />
        </PageSection>
      </Layout>
    </>
  );
}
