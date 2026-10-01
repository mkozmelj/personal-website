import { ReactNode } from "react";

interface IProps {
  size?: number;
  className?: string;
}

function StrokeIcon({
  size = 16,
  className,
  children,
}: IProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </StrokeIcon>
  );
}

export function ArrowLeft(props: IProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </StrokeIcon>
  );
}

export function MapPin(props: IProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </StrokeIcon>
  );
}

export function GitHubIcon(props: IProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </StrokeIcon>
  );
}

export function LinkedInIcon(props: IProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </StrokeIcon>
  );
}

export function InstagramIcon(props: IProps) {
  return (
    <StrokeIcon {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </StrokeIcon>
  );
}

export function XIcon(props: IProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 4l11.733 16H20L8.267 4z" />
      <path d="M4 20l6.768-6.768" />
      <path d="M13.228 10.772L20 4" />
    </StrokeIcon>
  );
}
