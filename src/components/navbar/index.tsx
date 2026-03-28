import { Section } from "@/common/types";

interface IProps {
  sections: Section[];
  activeSection?: string;
  setActiveSection: (section: string) => void;
}

export function Navbar({ sections, activeSection, setActiveSection }: IProps) {
  return (
    <nav aria-label="Page sections" className="my-4 hidden flex-col gap-2 lg:flex">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex w-max flex-row items-center gap-4 ${
              isActive ? "font-bold text-primary" : ""
            }`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => setActiveSection(section.id)}
          >
            <div
              className={`${
                isActive ? "w-16" : "w-4"
              } h-2 bg-primary transition-all motion-reduce:transition-none`}
            />
            {section.title}
          </a>
        );
      })}
    </nav>
  );
}
