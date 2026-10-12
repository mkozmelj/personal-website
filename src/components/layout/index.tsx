import { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MobileTopBar } from "@/components/navbar";
import { ProfileSidebar } from "@/components/personal";

// latin-ext is required for č, š and ž
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

type Props = {
  children: ReactNode;
  /** Home uses the profile as its mobile header; subpages get the top bar */
  home?: boolean;
  /** Single reading column without the profile sidebar, for blog posts */
  article?: boolean;
};

export function Layout({
  children,
  home = false,
  article = false,
}: Readonly<Props>) {
  const mobileGap = home ? "gap-16" : "gap-10";
  // With the sidebar, main carries the vertical padding so the sticky
  // sidebar can span the full viewport height
  const columns = article
    ? "box-content max-w-prose lg:gap-16 lg:py-24"
    : "max-w-container lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-0";
  const mainPadding = article ? "" : "lg:py-24";

  return (
    <div className={`${manrope.variable} font-sans`}>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div
        className={`mx-auto flex flex-col px-4 pb-12 lg:px-8 ${columns} ${mobileGap} ${
          home ? "pt-12" : "pt-6"
        }`}
      >
        {!home && <MobileTopBar />}
        {!article && <ProfileSidebar home={home} />}
        <main
          id="main-content"
          tabIndex={-1}
          className={`flex min-w-0 flex-col outline-none lg:gap-24 ${mainPadding} ${mobileGap}`}
        >
          {children}
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
