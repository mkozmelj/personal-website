import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function handler() {
  return new ImageResponse(
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
          Senior frontend developer
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
