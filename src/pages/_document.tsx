import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-white">
      <Head />
      <body className="dark text-foreground bg-black-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
