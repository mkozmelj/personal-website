import { Title } from "../common/title";

export function Summary() {
  return (
    <section className="font-thin" id="summary" aria-label="Summary">
      <Title title="Summary" />
      <div className="mb-2 px-8 lg:px-4">
        I build dynamic interfaces and full-stack web apps with Next.js and
        TypeScript, on the React stack. Angular and Nest.js are part of my
        toolkit when a codebase or team needs them. I aim for maintainable code
        and polished user experiences that hold up over time.
      </div>
      <div className="mb-2 px-8 lg:px-4">
        I&apos;m enthusiastic about using AI in professional settings—coding
        assistants, automation, and generative workflows—to speed up development
        and improve how teams and companies work. I want to help organizations
        adopt these tools thoughtfully: faster delivery and leaner processes,
        with quality and human judgment still in the loop.
      </div>
      <div className="mb-2 px-8 lg:px-4">
        My career began in a ten-person company before moving to a corporation of
        4,000+. I&apos;ve thrived in both small, close-knit teams and large,
        complex programs, and I care about clear communication, efficient
        workflows, and outcomes that matter.
      </div>
      <div className="mb-2 px-8 lg:px-4">
        Beyond coding, sports and the outdoors keep me grounded—football,
        badminton, cycling, and hiking give me energy and balance, and they feed
        a creative, steady approach to work and life.
      </div>
    </section>
  );
}
