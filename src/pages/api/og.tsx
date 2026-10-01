import type { NextApiRequest, NextApiResponse } from "next";
import { ImageResponse } from "next/og";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const image = new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #101010 0%, #1a1a1a 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Martin Kozmelj
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 24,
            color: "#adadad",
            fontWeight: 400,
          }}
        >
          Senior Software Engineer
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );

  image.headers.forEach((value, key) => res.setHeader(key, value));
  res.setHeader(
    "Cache-Control",
    "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400",
  );
  res.status(image.status).send(Buffer.from(await image.arrayBuffer()));
}
