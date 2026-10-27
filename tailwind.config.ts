import typography from "@tailwindcss/typography";
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
        "statement-sm": [
          "20px",
          { lineHeight: "30px", letterSpacing: "-0.01em", fontWeight: "500" },
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
      // Blog post bodies (`prose`), matched to the About page text
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text.muted"),
            "--tw-prose-headings": theme("colors.text.DEFAULT"),
            "--tw-prose-links": theme("colors.text.DEFAULT"),
            "--tw-prose-bold": theme("colors.text.DEFAULT"),
            "--tw-prose-counters": theme("colors.text.subtle"),
            "--tw-prose-bullets": theme("colors.border.strong"),
            "--tw-prose-hr": theme("colors.border.DEFAULT"),
            "--tw-prose-quotes": theme("colors.text.DEFAULT"),
            "--tw-prose-quote-borders": theme("colors.accent.DEFAULT"),
            "--tw-prose-captions": theme("colors.text.subtle"),
            "--tw-prose-code": theme("colors.text.DEFAULT"),
            "--tw-prose-pre-code": theme("colors.text.DEFAULT"),
            "--tw-prose-pre-bg": theme("colors.surface.DEFAULT"),
            "--tw-prose-th-borders": theme("colors.border.strong"),
            "--tw-prose-td-borders": theme("colors.border.DEFAULT"),
            maxWidth: theme("maxWidth.prose"),
            fontSize: "16px",
            lineHeight: "26px",
            h2: {
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "-0.01em",
              fontWeight: "600",
              marginTop: "2em",
            },
            h3: { fontSize: "18px", lineHeight: "26px", fontWeight: "600" },
            strong: { fontWeight: "500" },
            a: {
              fontWeight: "inherit",
              textDecoration: "none",
              borderBottom: `1px solid ${theme("colors.border.strong")}`,
              transitionProperty: "color, border-color",
              transitionDuration: theme("transitionDuration.fast"),
              "&:hover": {
                color: theme("colors.accent.hover"),
                borderColor: theme("colors.accent.hover"),
              },
            },
            blockquote: { fontStyle: "normal", fontWeight: "400" },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            code: {
              fontWeight: "400",
              backgroundColor: theme("colors.surface.raised"),
              borderRadius: "4px",
              padding: "0.15em 0.35em",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            pre: {
              border: `1px solid ${theme("colors.border.DEFAULT")}`,
              borderRadius: theme("borderRadius.md"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
export default config;
