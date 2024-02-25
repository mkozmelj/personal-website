interface IProps {
  title: string;
}
export function Title({ title }: IProps) {
  return (
    <h2 className="sticky top-0 lg:hidden font-bold mb-2 bg-background/70 px-8 py-2 lg-p-0">
      {title}
    </h2>
  );
}
