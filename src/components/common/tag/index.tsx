interface IProps {
  tags: string[];
  /** Tighter tags that never wrap, used on the projects page */
  compact?: boolean;
  className?: string;
}

export function TagList({ tags, compact = false, className = "" }: IProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-full border border-border-strong py-1 font-mono text-tag text-text-muted ${
            compact ? "whitespace-nowrap px-2.5" : "px-3"
          }`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
