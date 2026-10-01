import { Button } from "@/components/common/links";
import { EMAIL, SOCIAL_URLS } from "@/site-config";

export function Contact() {
  return (
    <section
      aria-label="Contact"
      className="flex flex-col gap-6 border-t border-border pt-8"
    >
      <p className="max-w-[640px] text-xl font-medium leading-[30px] tracking-[-0.01em] text-text lg:text-statement">
        If you&apos;ve read this far, we might work well together. Send me a few
        lines about what you&apos;re building, and I&apos;ll tell you honestly
        whether I&apos;m the right person for it.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href={`mailto:${EMAIL}`}>Email me</Button>
        <Button variant="secondary" href={SOCIAL_URLS.linkedin} external>
          Connect on LinkedIn
        </Button>
      </div>
    </section>
  );
}
