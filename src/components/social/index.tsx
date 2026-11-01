import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { SOCIAL_URLS } from "@/site-config";

const LINKS = [
  { name: "GitHub", href: SOCIAL_URLS.github, Icon: GitHubIcon },
  { name: "LinkedIn", href: SOCIAL_URLS.linkedin, Icon: LinkedInIcon },
  { name: "Instagram", href: SOCIAL_URLS.instagram, Icon: InstagramIcon },
  { name: "X", href: SOCIAL_URLS.x, Icon: XIcon },
];

export function Social() {
  return (
    <div className="-ml-3 flex items-center gap-1">
      <ul aria-label="Social" className="flex gap-1">
        {LINKS.map(({ name, href, Icon }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener"
              aria-label={`${name} (opens in a new tab)`}
              className="inline-flex size-11 items-center justify-center rounded-full text-text-muted transition-colors duration-fast hover:bg-surface hover:text-text"
            >
              <Icon size={20} />
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );
}
