import { InlineLink } from "@/components/common/links";

export function Footer() {
  return (
    <footer>
      <p className="max-w-[520px] text-body-sm text-text-subtle">
        Built with{" "}
        <InlineLink href="https://nextjs.org" external>
          Next.js
        </InlineLink>{" "}
        and{" "}
        <InlineLink href="https://tailwindcss.com" external>
          Tailwind CSS
        </InlineLink>
        , deployed with{" "}
        <InlineLink href="https://vercel.com" external>
          Vercel
        </InlineLink>
        . Inspired by{" "}
        <InlineLink href="https://brittanychiang.com" external>
          Brittany Chiang
        </InlineLink>
        .
      </p>
    </footer>
  );
}
