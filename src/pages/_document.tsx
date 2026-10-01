import { Html, Head, Main, NextScript } from "next/document";
import { PERSON_JSON_LD } from "../site-config";

const jsonLd = JSON.stringify(PERSON_JSON_LD);

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#101010" />
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
