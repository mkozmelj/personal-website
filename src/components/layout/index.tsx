import { Personal } from "@/components/personal/ index";
import { Navbar } from "@/components/navbar";
import { Social } from "@/components/social";
import { Section } from "@/common/types";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Readonly<Props>) {
  const [activeSection, setActiveSection] = useState<string>();
  const router = useRouter();

  const sections: Section[] = useMemo(
    () => [
      { id: "summary", title: "Summary" },
      { id: "experiences", title: "Experiences" },
      { id: "projects", title: "Projects" },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 1; // Add a small offset to prevent rounding errors

      for (const section of sections) {
        const target = document.getElementById(section.id);

        if (target) {
          const rect = target.getBoundingClientRect();

          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            setActiveSection(section.id);
            break; // Break out of the loop once the active section is found
          }
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Cleanup: remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);
  return (
    <div
      className={`relative flex flex-col lg:flex-row justify-between lg:p-24 max-w-7xl mx-auto ${montserrat.className}`}
    >
      <div className="lg:fixed lg:flex lg:w-1/2 lg:flex-col lg:justify-between p-8 lg:py-2">
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
      </div>
      <div className="flex flex-col flex-1 lg:w-1/2 mr-0 ml-50 mt-10 lg:mt-0">
        {children}
      </div>
    </div>
  );
}
