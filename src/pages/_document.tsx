import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-white">
      <Head />
      <body className="dark text-foreground bg-gradient-to-r from-black-200 to-black-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
