import { Layout } from "@/components/layout";
import { Experiences } from "@/components/experiences";
import { SeoHead } from "@/components/seo/SeoHead";

export default function ExperiencesPage() {
  return (
    <>
      <SeoHead
        title="Experiences"
        description="Work history and roles — senior frontend development, freelancing, and team leadership."
        path="/experiences"
      />
      <Layout>
        <Experiences pageHeading />
      </Layout>
    </>
  );
}
