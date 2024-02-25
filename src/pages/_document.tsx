import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-white">
      <Head />
      <body className="dark text-foreground bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
