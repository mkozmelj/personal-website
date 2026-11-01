import { Html, Head, Main, NextScript } from "next/document";
import { PERSON_JSON_LD, THEME_COLORS } from "../site-config";

const jsonLd = JSON.stringify(PERSON_JSON_LD);

// Runs before first paint so a light-theme visitor never sees a dark flash.
// A saved choice wins; otherwise the system setting decides.
const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t;document.querySelector('meta[name="theme-color"]').content=${JSON.stringify(THEME_COLORS)}[t]})()`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={THEME_COLORS.dark} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
