import Image from "next/image";
import { ReactNode } from "react";
import { Drawing, Marked, Note } from "@/components/common/hand";
import { MapPin } from "@/components/icons";
import { MobileTabs } from "@/components/navbar";
import { Social } from "@/components/social";
import { HERO_ARROW, HERO_GROUND, HERO_HATCH } from "@/data/hand-drawn";

interface IPortraitProps {
  note: string;
  compact: boolean;
}

/** Portrait standing on a hatched circle, with a handwritten note beside it */
function HeroPortrait({ note, compact }: Readonly<IPortraitProps>) {
  // Full hero: the hero and sidebar share the screen, so giving back the
  // sidebar's height centers the portrait on the screen, not just the hero
  const size = compact
    ? "max-w-[360px] [--art:200px] lg:self-end lg:[--art:300px]"
    : "max-w-[440px] [--art:min(36svh,300px)] lg:mb-[calc(var(--rail)*-1)] lg:self-center lg:[--art:min(100svh-96px,46vw,560px)]";

  return (
    <div
      className={`relative h-[var(--art)] w-full lg:justify-self-end ${size}`}
    >
      {/* The circle runs past the ground line and is cut off by it */}
      <div className="absolute inset-0 overflow-hidden">
        <Drawing
          visual={HERO_HATCH}
          className="hand-scribble absolute bottom-[calc(var(--art)*-0.12)] left-0 size-[calc(var(--art)*0.8)]"
        />
      </div>
      <Image
        src="/portret-cutout.webp"
        alt="Portrait of Martin Kozmelj"
        width={376}
        height={560}
        priority
        sizes="(min-width: 1024px) 376px, 200px"
        className="absolute bottom-0 left-[calc(var(--art)*0.07)] h-[var(--art)] w-auto"
      />
      <Drawing
        visual={HERO_GROUND}
        className="absolute -bottom-1 left-0 w-[calc(var(--art)*0.8)]"
      />
      <div className="absolute right-0 top-2 w-[130px] rotate-[3deg] lg:top-4 lg:w-[132px]">
        <Note>{note}</Note>
        <Drawing
          visual={HERO_ARROW}
          className="ml-1 mt-1 h-9 w-14 -scale-x-100"
        />
      </div>
    </div>
  );
}

interface IHeroProps {
  title: string;
  note: string;
  /** Subpages: only as tall as its content, so the page's content comes first */
  compact?: boolean;
  children: ReactNode;
}

/**
 * The full hero fills the first screen together with the sidebar, which starts
 * right below it (--rail is the sidebar's height, set in Layout). Its portrait
 * reaches down beside the sidebar to the bottom of the screen.
 */
function Hero({
  title,
  note,
  compact = false,
  children,
}: Readonly<IHeroProps>) {
  const height = compact
    ? "lg:items-end lg:pb-16 lg:pt-20"
    : "min-h-[calc(100svh-96px)] justify-between lg:min-h-[calc(100svh-var(--rail))] lg:items-center";

  return (
    <header
      className={`flex flex-col gap-6 lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 ${height}`}
    >
      <HeroPortrait note={note} compact={compact} />
      <div
        className={`flex flex-col gap-5 lg:order-first lg:gap-6 ${compact ? "" : "lg:pt-12"}`}
      >
        <h1 className="whitespace-nowrap text-hero text-text lg:text-hero-lg">
          {title}
        </h1>
        {children}
      </div>
    </header>
  );
}

export function HomeHero() {
  return (
    <Hero
      title="Martin Kozmelj"
      note="dad, husband, mediocre athlete. Sometimes in a different order."
    >
      <p className="max-w-[560px] text-statement-sm text-text lg:text-statement">
        Senior software engineer at Sportradar,{" "}
        <Marked>moving into engineering management</Marked>
      </p>
      <ul className="flex flex-col gap-2 text-body-sm text-text-muted lg:flex-row lg:flex-wrap lg:gap-x-5">
        <li className="flex items-center gap-2">
          <MapPin />
          Based in Slovenia
        </li>
        <li className="flex items-center gap-2">
          <span className="mx-1 block size-2 rounded-full bg-accent lg:mx-0" />
          Open to part-time freelance work
        </li>
      </ul>
      <p className="max-w-[520px] text-body text-text-muted">
        I enjoy mentoring and helping teams work better, and I build side
        projects with AI to see what it can really do.
      </p>
      {/* On desktop these two are the sidebar, which starts in the hero */}
      <div className="flex flex-col gap-4 lg:hidden">
        <Social />
        <MobileTabs />
      </div>
    </Hero>
  );
}

export interface IPageHero {
  title: string;
  lead: ReactNode;
  note: string;
}

export function PageHero({ title, lead, note }: Readonly<IPageHero>) {
  return (
    <Hero title={title} note={note} compact>
      <p className="max-w-[560px] text-lg leading-7 text-text-muted lg:text-lead">
        {lead}
      </p>
    </Hero>
  );
}
