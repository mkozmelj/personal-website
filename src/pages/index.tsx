import { Button, TextLink } from "@/components/common/links";
import { HomeSection } from "@/components/common/section";
import { Experiences } from "@/components/experiences";
import { Layout } from "@/components/layout";
import { Projects } from "@/components/projects";
import { SeoHead } from "@/components/seo/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead path="/" />
      <Layout home>
        <HomeSection id="about" label="About" className="max-w-prose">
          <div className="flex flex-col gap-4 text-text-muted">
            <p>
              I&apos;m a senior software engineer{" "}
              <span className="text-text">
                moving into engineering management
              </span>
              . I build products with Next.js, TypeScript and React, and I use
              AI tools like Claude and MCP to{" "}
              <span className="text-text">
                ship faster without giving up quality or judgment
              </span>
              .
            </p>
            <p>
              I&apos;ve worked in a ten-person company and in a 4,000+ person
              corporation, so I care about clear communication, sensible
              prioritization and teams that adopt new tools thoughtfully. I
              write about what actually works, in code and in teams, and
              I&apos;m{" "}
              <span className="text-text">
                open to selected part-time remote engagements
              </span>
              .
            </p>
            <p>
              Outside work you&apos;ll find me playing tennis or badminton,
              cycling or hiking.
            </p>
          </div>
          <div className="mt-2 lg:mt-0">
            <Button variant="secondary" href="/about" arrow>
              More about me
            </Button>
          </div>
        </HomeSection>

        <HomeSection id="experience" label="Experience">
          <Experiences showedExperiences={3} />
          <div>
            <TextLink href="/experiences">View full experience</TextLink>
          </div>
        </HomeSection>

        <HomeSection id="projects" label="Projects">
          <Projects showedProjects={3} />
          <div>
            <TextLink href="/projects">View all projects</TextLink>
          </div>
        </HomeSection>
      </Layout>
    </>
  );
}
