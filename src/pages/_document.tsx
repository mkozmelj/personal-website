import { Html, Head, Main, NextScript } from "next/document";
import { PERSON_JSON_LD } from "../site-config";

const jsonLd = JSON.stringify(PERSON_JSON_LD);

export default function Document() {
  return (
    <Html lang="en" className="bg-black-200">
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
      <body className="dark bg-gradient-to-r from-black-200 to-black-200 text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
