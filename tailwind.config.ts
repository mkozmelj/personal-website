import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF4444",
        muted: "#adadad",
        black: {
          100: "#000",
          200: "#101010",
        },
        foreground: "#fafafa",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
