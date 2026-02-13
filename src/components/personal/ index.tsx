import Image from "next/image";

export function Personal() {
  return (
    <div>
      <Image
        src="/portret-lighting.webp"
        alt="Portrait"
        width="250"
        height="250"
        className="w-auto max-w-[250px] lg:max-h-[40vh]"
      />
      <h1 className="text-5xl font-semibold">Martin Kozmelj</h1>
      <h3 className="text-xl font-light my-3">
        Senior frontend developer at&nbsp;
        <span className="font-normal">Sportradar</span>
      </h3>
      <p className="font-thin lg:w-1/2">
        I am creating seamless digital experiences with a passion for the latest
        web innovations.
      </p>
    </div>
  );
}
