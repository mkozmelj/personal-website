interface IProps {
  tag: string;
}

export function Tag({ tag }: IProps) {
  return (
    <div className="inline-flex items-center rounded-xl px-2 py-1 text-xs bg-primary/20 font-medium text-primary ring-1 ring-inset ring-primary">
      {tag}
    </div>
  );
}
