interface IProps {
  title: string;
  /** Use h1 for standalone pages; h2 for home sections */
  as?: "h1" | "h2";
}

export function Title({ title, as = "h2" }: IProps) {
  const Heading = as;
  const isPageHeading = as === "h1";
  return (
    <Heading
      className={`font-bold mb-2 bg-black-200/70 px-8 py-2 lg-p-0 sticky top-0 ${
        isPageHeading ? "" : "lg:hidden"
      }`}
    >
      {title}
    </Heading>
  );
}
