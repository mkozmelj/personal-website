import { ReactNode } from "react";
import { InlineLink } from "@/components/common/links";
import { Layout } from "@/components/layout";
import { SeoHead } from "@/components/seo/SeoHead";
import { EMAIL } from "@/site-config";

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-6 text-[22px] font-semibold leading-[30px] tracking-[-0.01em] text-text first:mt-0 lg:mt-8 lg:text-h2 lg:first:mt-0">
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <SeoHead
        title="Privacy"
        description="What this site measures, what it doesn't, and how to get in touch about it."
        path="/privacy"
      />
      <Layout
        hero={{
          title: "Privacy",
          note: "no cookies, no banner",
          lead: "This site uses cookieless analytics to show me which articles get read. It doesn't use ads, and it doesn't try to find out who you are.",
        }}
      >
        <article>
          <div className="flex max-w-prose flex-col gap-4 text-body text-text-muted">
            <H2>What I measure</H2>
            <p>
              I use{" "}
              <InlineLink href="https://posthog.com" external>
                PostHog
              </InlineLink>
              , hosted in the EU. It records the pages you open, the site you
              came from, how long you stay, how far you scroll, the links and
              buttons you click, and your browser and device type.
            </p>

            <H2>What I don&apos;t store</H2>
            <p>
              PostHog sets no cookies and stores nothing in your browser. It
              briefly uses your IP address and browser details to create a
              temporary visitor ID, so one visit counts as one visit, and then
              discards the IP address. I can&apos;t see who you are, and I
              don&apos;t record your screen.
            </p>

            <H2>Hosting</H2>
            <p>
              <InlineLink href="https://vercel.com" external>
                Vercel
              </InlineLink>{" "}
              hosts this site. Like any host, it handles technical data such as
              your IP address to deliver the pages.
            </p>

            <H2>Your theme choice</H2>
            <p>
              If you switch between light and dark, your browser saves that
              choice in local storage. It stays on your device.
            </p>

            <H2>Questions</H2>
            <p>
              If you have a question or a privacy request, email me at{" "}
              <InlineLink href={`mailto:${EMAIL}`}>{EMAIL}</InlineLink>. Last
              updated 2 November 2026.
            </p>
          </div>
        </article>
      </Layout>
    </>
  );
}
