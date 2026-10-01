import Link from "next/link";
import { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";

/** Arrow that nudges up-right when its `group` ancestor is hovered */
export const ARROW_NUDGE =
  "transition-transform duration-base ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export function NewTabHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

interface IButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  /** Opens in a new tab */
  external?: boolean;
  /** Trailing ↗ arrow */
  arrow?: boolean;
  children: ReactNode;
}

const BUTTON_VARIANTS = {
  primary:
    "border-accent bg-accent text-on-accent hover:border-accent-hover hover:bg-accent-hover",
  secondary: "border-border-strong bg-transparent text-text hover:bg-surface",
};

export function Button({
  href,
  variant = "primary",
  external = false,
  arrow = false,
  children,
}: IButtonProps) {
  const className = `group inline-flex min-h-10 items-center gap-2 rounded-full border px-[18px] py-[9px] text-button transition-colors duration-fast ease-out ${BUTTON_VARIANTS[variant]}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight className={ARROW_NUDGE} />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={className}>
        {content}
        <NewTabHint />
      </a>
    );
  }
  // next/link is for internal routes only (not mailto:)
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

interface ILinkProps {
  href: string;
  children: ReactNode;
}

/** Arrow link under lists */
export function TextLink({ href, children }: ILinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-11 items-center gap-1 text-button text-text transition-colors duration-fast hover:text-accent-hover"
    >
      {children}
      <ArrowUpRight className={ARROW_NUDGE} />
    </Link>
  );
}

/** Link inside paragraphs and the footer */
export function InlineLink({
  href,
  external = false,
  children,
}: ILinkProps & { external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className="border-b border-border-strong text-text transition-colors duration-fast hover:border-accent-hover hover:text-accent-hover"
    >
      {children}
      {external && <NewTabHint />}
    </a>
  );
}

/** Desktop subpages only; MobileTopBar replaces it below lg */
export function BackLink() {
  return (
    <div className="hidden lg:block">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-2 font-mono text-label uppercase text-text-muted transition-colors duration-fast hover:text-accent-hover"
      >
        <ArrowLeft />
        Home
      </Link>
    </div>
  );
}
