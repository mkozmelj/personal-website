import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#101010",
        surface: { DEFAULT: "#171717", raised: "#1f1f1f" },
        border: { DEFAULT: "#262626", strong: "#404040" },
        text: { DEFAULT: "#f5f5f5", muted: "#a3a3a3", subtle: "#858585" },
        accent: { DEFAULT: "#ff6a4d", hover: "#ff8a73", subtle: "#ff6a4d1f" },
        "on-accent": "#101010",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        display: [
          "56px",
          { lineHeight: "60px", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-sm": [
          "40px",
          { lineHeight: "44px", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        h1: [
          "40px",
          { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h2: [
          "24px",
          { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        h3: ["18px", { lineHeight: "26px", fontWeight: "600" }],
        statement: [
          "24px",
          { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        lead: ["20px", { lineHeight: "30px" }],
        body: ["16px", { lineHeight: "26px" }],
        "body-sm": ["14px", { lineHeight: "22px" }],
        button: ["15px", { lineHeight: "20px", fontWeight: "600" }],
        label: [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.08em", fontWeight: "500" },
        ],
        meta: ["13px", { lineHeight: "20px" }],
        tag: ["12px", { lineHeight: "16px" }],
      },
      borderRadius: { sm: "6px", md: "12px" },
      boxShadow: {
        focus: "0 0 0 2px #101010, 0 0 0 4px #ff6a4d",
        "card-hover": "0 1px 0 0 #262626, 0 12px 32px -16px #000000",
      },
      maxWidth: { container: "1200px", prose: "680px" },
      transitionDuration: { fast: "150ms", base: "250ms" },
      transitionTimingFunction: { out: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
    },
  },
  plugins: [],
};
export default config;
