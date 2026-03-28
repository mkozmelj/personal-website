import { Personal } from "@/components/personal/ index";
import { Navbar } from "@/components/navbar";
import { Social } from "@/components/social";
import { Section } from "@/common/types";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Readonly<Props>) {
  const [activeSection, setActiveSection] = useState<string>("summary");
  const router = useRouter();
  const intersectionRatiosRef = useRef<Record<string, number>>({});

  const sections: Section[] = useMemo(
    () => [
      { id: "summary", title: "Summary" },
      { id: "experiences", title: "Experiences" },
      { id: "projects", title: "Projects" },
    ],
    [],
  );

  useEffect(() => {
    if (router.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersectionRatiosRef.current[entry.target.id] = entry.intersectionRatio;
        }
        let bestId = "";
        let bestRatio = -1;
        for (const section of sections) {
          const r = intersectionRatiosRef.current[section.id] ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = section.id;
          }
        }
        if (bestId && bestRatio > 0) {
          setActiveSection(bestId);
        }
      },
      {
        root: null,
        rootMargin: "-32% 0px -32% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      }
      observer.disconnect();
      intersectionRatiosRef.current = {};
    };
  }, [router.pathname, sections]);

  return (
    <div
      className={`relative mx-auto flex max-w-7xl flex-col justify-between lg:flex-row lg:p-24 ${montserrat.className}`}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <header className="flex flex-col p-8 lg:fixed lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:py-2">
        <Personal />
        {router.pathname === "/" ? (
          <Navbar
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        ) : (
          <Link href="/" className="mt-4">
            Back to home
          </Link>
        )}
        <Social />
      </header>
      <main
        id="main-content"
        className="ml-50 mr-0 mt-10 flex flex-1 flex-col lg:mt-0 lg:w-1/2"
        tabIndex={-1}
      >
        {children}
      </main>
    </div>
  );
}
