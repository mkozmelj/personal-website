import { Section } from "@/common/types";

interface IProps {
  sections: Section[];
  activeSection?: string;
  setActiveSection: (section: string) => void;
}

export function Navbar({ sections, activeSection, setActiveSection }: IProps) {
  return (
    <div className="hidden lg:flex flex-col my-10 gap-2">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`flex flex-row gap-4 items-center ${
            activeSection === section.id ? "text-primary font-bold" : ""
          }`}
          onClick={() => setActiveSection(section.id)}
        >
          <div
            className={`${
              activeSection === section.id ? "w-16" : "w-4"
            } bg-primary h-2 transition-all`}
          ></div>
          {section.title}
        </a>
      ))}
    </div>
  );
}
