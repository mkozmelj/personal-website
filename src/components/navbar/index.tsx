import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/site-config";

/** Scroll-spy for the home page: id of the section most in view */
function useActiveSection(enabled: boolean) {
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0].id);
  const intersectionRatiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    if (!enabled) return;

    const ratios = intersectionRatiosRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios[entry.target.id] = entry.intersectionRatio;
        }
        let bestId = "";
        let bestRatio = 0;
        for (const { id } of NAV_ITEMS) {
          const r = ratios[id] ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }
        if (bestId) setActiveSection(bestId);
      },
      {
        root: null,
        rootMargin: "-32% 0px -32% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
      intersectionRatiosRef.current = {};
    };
  }, [enabled]);

  return [activeSection, setActiveSection] as const;
}

interface IProps {
  /** Home links to in-page sections with scroll-spy; subpages link to routes */
  anchors?: boolean;
}

/** Desktop sidebar navigation (≥ lg) */
export function SideNav({ anchors = false }: IProps) {
  const { pathname } = useRouter();
  const [activeSection, setActiveSection] = useActiveSection(anchors);

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex flex-col">
        {NAV_ITEMS.map(({ id, label, href }) => {
          const isActive = anchors ? activeSection === id : pathname === href;
          const className = `group flex min-h-10 items-center gap-4 font-mono text-label uppercase transition-colors duration-fast ${
            isActive ? "text-text" : "text-text-subtle hover:text-text"
          }`;
          const bar = (
            <span
              className={`block transition-[width,background-color] duration-base ease-out ${
                isActive
                  ? "h-0.5 w-16 bg-accent"
                  : "h-px w-8 bg-text-subtle group-hover:w-16 group-hover:bg-text"
              }`}
            />
          );
          return (
            <li key={id}>
              {anchors ? (
                <a
                  href={`#${id}`}
                  className={className}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActiveSection(id)}
                >
                  {bar}
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className={className}
                  aria-current={isActive ? "page" : undefined}
                >
                  {bar}
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Mobile tab row (< lg). Always links to the pages; none is active on home. */
export function MobileTabs() {
  const { pathname } = useRouter();

  return (
    <nav
      aria-label="Main"
      className="flex gap-6 border-b border-border lg:hidden"
    >
      {NAV_ITEMS.map(({ id, label, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={id}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`-mb-px flex min-h-11 items-center border-b-2 font-mono text-label uppercase ${
              isActive
                ? "border-accent text-text"
                : "border-transparent text-text-subtle"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

/** Mobile header on subpages (< lg) */
export function MobileTopBar() {
  return (
    <header className="flex flex-col gap-2 lg:hidden">
      <div className="flex">
        <Link
          href="/"
          className="-my-2 flex min-h-11 items-center text-xl font-bold leading-7 tracking-[-0.01em] text-text"
        >
          Martin Kozmelj
        </Link>
      </div>
      <MobileTabs />
    </header>
  );
}
