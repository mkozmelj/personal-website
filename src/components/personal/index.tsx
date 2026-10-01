import Image from "next/image";
import Link from "next/link";
import { MapPin } from "@/components/icons";
import { MobileTabs, SideNav } from "@/components/navbar";
import { Social } from "@/components/social";

interface IProps {
  /** Home shows the sidebar on mobile too, as the page header */
  home?: boolean;
}

export function ProfileSidebar({ home = false }: IProps) {
  const Name = home ? "h1" : "p";

  return (
    <header
      className={`flex-col gap-4 lg:sticky lg:top-24 lg:flex lg:self-start ${
        home ? "flex" : "hidden"
      }`}
    >
      <Image
        src="/portret-lighting.webp"
        alt="Portrait of Martin Kozmelj"
        width={200}
        height={299}
        priority
        sizes="(min-width: 1024px) 200px, 160px"
        className="h-[239px] w-[160px] object-contain object-left-bottom lg:h-[200px] lg:w-[200px]"
      />
      <div className="flex flex-col gap-6 lg:gap-2">
        <div className="flex flex-col gap-2 lg:gap-2">
          <Name className="text-display-sm text-text">
            <Link href="/">Martin Kozmelj</Link>
          </Name>
          <p className="text-lg font-medium leading-7 text-text lg:text-xl lg:leading-[30px]">
            Senior software engineer at Sportradar
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-body-sm text-text-muted lg:flex-row lg:flex-wrap lg:gap-x-5">
          <li className="flex items-center gap-2">
            <MapPin />
            Based in Slovenia
          </li>
          <li className="flex items-center gap-2">
            <span className="mx-1 block size-2 rounded-full bg-accent lg:mx-0" />
            Open to part-time freelance work
          </li>
        </ul>
        <p className="text-body text-text-muted lg:max-w-[400px]">
          I enjoy mentoring and helping teams work better, and I build side
          projects with AI to see what it can really do.
        </p>
      </div>
      <SideNav anchors={home} />
      <Social />
      {home && <MobileTabs />}
    </header>
  );
}
