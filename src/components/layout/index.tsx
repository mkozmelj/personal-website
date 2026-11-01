import { ReactNode } from "react";
import { Kalam, Manrope } from "next/font/google";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MobileTopBar, SideNav } from "@/components/navbar";
import { HomeHero, type IPageHero, PageHero } from "@/components/personal";
import { Social } from "@/components/social";

// latin-ext is required for č, š and ž
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-hand",
  display: "swap",
});

type Props = {
  children: ReactNode;
  /** Opens with the name and intro, and the nav links to its sections */
  home?: boolean;
  /** Subpage hero. Without it the page starts directly, as blog posts do. */
  hero?: IPageHero;
};

/**
 * One layout for every page: a hero across both columns, then the sidebar next
 * to the content. The sidebar starts inside the first screen, so its nav is
 * there on landing, and pins to the top once the page scrolls.
 */
export function Layout({ children, home = false, hero }: Readonly<Props>) {
  const mobileGap = home ? "gap-16" : "gap-10";
  const hasHero = home || !!hero;
  // --rail is the height the sidebar takes up in home's first screen. main
  // starts that far down, so nothing but the hero and sidebar shows on landing.
  const rail = home ? "lg:[--rail:268px]" : "";
  const offset = home
    ? "lg:pt-[var(--rail)]"
    : hasHero
      ? "lg:pt-0"
      : "lg:pt-24";

  return (
    <div className={`${manrope.variable} ${kalam.variable} font-sans`}>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      {/* Below lg everything stacks into one column, so it is capped to a
          reading measure: without it the text runs the full width of a tablet */}
      <div
        className={`mx-auto box-content flex max-w-prose flex-col px-4 pb-12 lg:box-border lg:grid lg:max-w-container lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] lg:gap-x-16 lg:gap-y-0 lg:px-8 ${rail} ${mobileGap} ${
          home ? "pt-8 lg:pt-0" : "pt-6 lg:pt-0"
        }`}
      >
        {!home && <MobileTopBar />}
        {home && <HomeHero />}
        {hero && <PageHero {...hero} />}
        <div className="hidden lg:block">
          <div
            className={`sticky top-24 flex flex-col gap-4 ${hasHero ? "" : "mt-24"}`}
          >
            {!home && (
              <Link href="/" className="text-h2 text-text">
                Martin Kozmelj
              </Link>
            )}
            <SideNav anchors={home} />
            <Social />
          </div>
        </div>
        <main
          id="main-content"
          tabIndex={-1}
          className={`flex min-w-0 flex-col outline-none lg:gap-24 lg:pb-24 ${offset} ${mobileGap}`}
        >
          {children}
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
