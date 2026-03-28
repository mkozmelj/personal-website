import Image from "next/image";

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
        className="h-auto w-auto max-w-[250px] lg:max-h-[40vh]"
      />
      <h1 className="text-5xl font-semibold">Martin Kozmelj</h1>
      <p className="my-3 text-xl font-light">
        Senior frontend developer at&nbsp;
        <span className="font-normal">Sportradar</span>
      </p>
      <p className="font-thin lg:w-1/2">
        I am creating seamless digital experiences with a passion for the latest
        web innovations.
      </p>
    </div>
  );
}
