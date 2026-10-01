import { readFile } from "node:fs/promises";
import path from "node:path";
import type { NextApiRequest, NextApiResponse } from "next";
import { ImageResponse } from "next/og";

const FONTS_DIR = path.join(process.cwd(), "src/assets/fonts");

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const [bold, medium] = await Promise.all([
    readFile(path.join(FONTS_DIR, "manrope-700.woff")),
    readFile(path.join(FONTS_DIR, "manrope-500.woff")),
  ]);

  const image = new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#101010",
          fontFamily: "Manrope",
        }}
      >
        <div style={{ width: 64, height: 4, background: "#ff6a4d" }} />
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginTop: 32,
            color: "#f5f5f5",
          }}
        >
          Martin Kozmelj
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            marginTop: 16,
            color: "#a3a3a3",
          }}
        >
          Senior software engineer at Sportradar
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Manrope", data: bold, weight: 700, style: "normal" },
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
      ],
    },
  );

  image.headers.forEach((value, key) => res.setHeader(key, value));
  res.setHeader(
    "Cache-Control",
    "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400",
  );
  res.status(image.status).send(Buffer.from(await image.arrayBuffer()));
}
