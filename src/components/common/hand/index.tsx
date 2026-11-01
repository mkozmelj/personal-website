import { ReactNode } from "react";
import type { HandVisual } from "@/data/hand-drawn";

/**
 * The handwritten layer. Kalam is only ever a note in the margin of the page:
 * headings, titles and anything you need to read stay in Manrope.
 */

/** Phrase underlined by hand; the page's emphasis, so use it once per screen */
export function Marked({ children }: Readonly<{ children: ReactNode }>) {
  return <span className="hand-underline">{children}</span>;
}

interface INoteProps {
  children: ReactNode;
  className?: string;
}

/** Margin note. Hidden from assistive tech: it adds color, not information. */
export function Note({ children, className = "" }: Readonly<INoteProps>) {
  return (
    <span
      aria-hidden="true"
      className={`block font-hand text-note text-accent ${className}`}
    >
      {children}
    </span>
  );
}

interface IDrawingProps {
  visual: HandVisual;
  className?: string;
}

/** Decorative inline SVG, so its strokes follow the theme's colors */
export function Drawing({ visual, className = "" }: Readonly<IDrawingProps>) {
  return (
    <svg
      viewBox={visual.viewBox}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {visual.strokes.map(({ d, width, className: strokeClass }, index) => (
        <path key={index} d={d} strokeWidth={width} className={strokeClass} />
      ))}
    </svg>
  );
}
