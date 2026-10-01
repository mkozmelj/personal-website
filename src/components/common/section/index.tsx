import { ReactNode } from "react";
import { BackLink } from "@/components/common/links";

interface ISectionProps {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}

/** Home section with a mono label that sticks to the top on mobile */
export function HomeSection({
  id,
  label,
  className = "",
  children,
}: ISectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className={`flex flex-col gap-4 lg:scroll-mt-24 lg:gap-6 ${className}`}
    >
      <h2
        id={`${id}-label`}
        className="sticky top-0 z-10 -mx-4 bg-bg p-4 font-mono text-label uppercase text-text lg:static lg:mx-0 lg:p-0"
      >
        {label}
      </h2>
      {children}
    </section>
  );
}

interface IPageProps {
  title: string;
  lead: ReactNode;
  children: ReactNode;
}

/** Subpage body: back link (desktop), h1, lead paragraph, then the content */
export function PageSection({ title, lead, children }: IPageProps) {
  return (
    <article className="flex flex-col gap-6">
      <BackLink />
      <h1 className="text-h1 text-text">{title}</h1>
      <p className="max-w-prose text-lg leading-7 text-text-muted lg:text-lead">
        {lead}
      </p>
      {children}
    </article>
  );
}
