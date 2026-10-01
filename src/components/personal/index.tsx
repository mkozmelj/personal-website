import Image from "next/image";

const FACTS = ["Based in Slovenia", "Open to part-time freelance work"];

export function Personal() {
  return (
    <div>
      <Image
        src="/portret-lighting.webp"
        alt="Portrait of Martin Kozmelj"
        width={250}
        height={250}
        priority
        sizes="(max-width: 1024px) 100vw, 250px"
        className="h-auto w-auto max-w-[250px] lg:max-h-[30vh]"
      />
      <h1 className="text-5xl font-semibold">Martin Kozmelj</h1>
      <p className="my-3 text-xl font-light">
        Senior software engineer at{" "}
        <span className="font-normal">Sportradar</span>
      </p>
      <ul className="mb-3 flex flex-wrap items-center gap-x-2 text-sm font-light text-muted">
        {FACTS.map((fact, index) => (
          <li key={fact} className="flex items-center gap-x-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-primary">
                ●
              </span>
            )}
            {fact}
          </li>
        ))}
      </ul>
      <p className="font-thin lg:w-1/2">
        I enjoy mentoring and helping teams work better, and I build side
        projects with AI to see what it can really do.
      </p>
    </div>
  );
}
