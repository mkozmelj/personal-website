import { IExperience } from "@/common/types";
import { ARROW_NUDGE, NewTabHint } from "@/components/common/links";
import { TagList } from "@/components/common/tag";
import { ArrowUpRight } from "@/components/icons";
import { formatPeriod } from "@/data/experiences";

interface IProps {
  experience: IExperience;
  /** Home items are linked cards with short copy; the page list is static */
  home?: boolean;
}

export function Experience({ experience, home = false }: IProps) {
  const position = (home && experience.homePosition) || experience.position;
  const summary = (home && experience.homeSummary) || experience.summary;
  const title = `${position} · ${experience.company}`;
  const linked = home && !!experience.companyUrl;

  return (
    <li
      className={`group relative flex flex-col gap-2 lg:-mx-6 lg:grid lg:grid-cols-[128px_minmax(0,1fr)] lg:gap-6 lg:rounded-md lg:border lg:border-transparent lg:p-6 ${
        home
          ? ""
          : "border-b border-border pb-8 last:border-b-0 last:pb-0 lg:last:border-b lg:last:pb-6"
      } ${
        linked
          ? "lg:transition-colors lg:duration-fast lg:ease-out lg:hover:border-border lg:hover:bg-surface"
          : ""
      }`}
    >
      <p className="font-mono text-meta text-text-subtle lg:leading-[26px]">
        {formatPeriod(experience)}
      </p>
      <div className="flex flex-col gap-2 lg:gap-3">
        <h3 className="text-h3 text-text">
          {linked ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener"
              className="transition-colors duration-fast after:absolute after:inset-0 after:rounded-md focus-visible:shadow-none focus-visible:after:shadow-focus lg:group-hover:text-accent"
            >
              {title}
              <ArrowUpRight
                className={`ml-1 hidden align-[-2px] lg:inline-block ${ARROW_NUDGE}`}
              />
              <NewTabHint />
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-body-sm text-text-muted">{summary}</p>
        <TagList tags={experience.tags} />
      </div>
    </li>
  );
}
