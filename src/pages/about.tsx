import { ReactNode } from "react";
import { InlineLink } from "@/components/common/links";
import { PageSection } from "@/components/common/section";
import { Layout } from "@/components/layout";
import { SeoHead } from "@/components/seo/SeoHead";
import { EMAIL } from "@/site-config";

/** Blog posts and talks; the list renders only once there is something to show */
const posts: { title: string; href: string }[] = [];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-6 text-[22px] font-semibold leading-[30px] tracking-[-0.01em] text-text lg:mt-8 lg:text-h2">
      {children}
    </h2>
  );
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-text">{children}</strong>;
}

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About me"
        description="About Martin Kozmelj — a senior software engineer moving into engineering management, building with Next.js, TypeScript and React and writing about AI engineering and teams."
        path="/about"
      />
      <Layout>
        <PageSection
          title="About me"
          lead={
            <>
              I&apos;m a senior software engineer, and I&apos;m in the middle of
              a{" "}
              <span className="text-text">
                deliberate move into engineering management
              </span>
              . I build web products with Next.js, TypeScript and React, I use
              AI tools every day, and I write about what actually works, both in
              code and in teams.
            </>
          }
        >
          <div className="flex max-w-prose flex-col gap-4 text-body text-text-muted">
            <H2>How I got here</H2>
            <p>
              My career started in a <Strong>ten-person company</Strong>, where
              everyone did a bit of everything and decisions took a
              conversation, not a process. Later I moved to a{" "}
              <Strong>corporation with more than 4,000 people</Strong>, where
              the challenge was the opposite: complex programs, many teams, and
              the need to keep communication clear when no one person sees the
              whole picture.
            </p>
            <p>
              Working in both taught me that good engineering is as much about
              people and priorities as about code. That realization is why
              I&apos;m moving toward management. Soft skills turned out to be
              the hard part, and I find that more interesting than another
              framework.
            </p>

            <H2>What I build</H2>
            <p>
              My core stack is{" "}
              <Strong>Next.js, TypeScript, React and Tailwind CSS</Strong>, from
              interfaces that feel polished to full-stack web apps. When a
              codebase or team needs them, I also work with Angular and Nest.js.
              I aim for code that stays maintainable long after the first
              release, and for user experiences that hold up over time.
            </p>

            <H2>Building with AI</H2>
            <p>
              I&apos;m most interested in how teams adopt these tools: faster
              delivery and leaner processes, with quality and human judgment
              still in the loop. In my view, tools should be introduced
              thoughtfully, not mandated.
            </p>

            <H2>What I write and talk about</H2>
            <p>
              I write about two things:{" "}
              <Strong>practical AI engineering</Strong> (building real products
              with Claude, MCP and AI-assisted workflows), and{" "}
              <Strong>becoming an engineering manager in the AI era</Strong>{" "}
              (roadmaps, prioritization, leading AI adoption, and the IC-to-EM
              transition). The posts are meant to be honest, including what
              didn&apos;t work.
            </p>
            {posts.length > 0 && (
              <ul className="flex flex-col gap-2">
                {posts.map((post) => (
                  <li key={post.href}>
                    <InlineLink href={post.href} external>
                      {post.title}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            )}

            <H2>Working with me</H2>
            <p>
              I&apos;m building toward a management role, and I&apos;m open to{" "}
              <Strong>selected part-time remote engagements</Strong> for CTOs
              and founders who need senior help, in a hands-on engineering
              capacity at first. If you have a product that needs a careful
              frontend or full-stack builder who also thinks about priorities
              and team workflow,{" "}
              <InlineLink href={`mailto:${EMAIL}`}>get in touch</InlineLink>.
            </p>

            <H2>Outside work</H2>
            <p>
              Sports and the outdoors keep me grounded. I play tennis and
              badminton, and I cycle and hike. They give me energy and balance,
              and they feed the creative, steady approach I try to bring to
              work.
            </p>
          </div>
        </PageSection>
      </Layout>
    </>
  );
}
