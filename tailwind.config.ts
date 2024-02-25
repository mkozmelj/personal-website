import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#D22B2B",
      muted: "#adadad",
    },
  },
  plugins: [
    nextui({
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: "#D22B2B",
            muted: "#adadad",
            black: {
              100: "#000",
              200: "#101010",
            },
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
  darkMode: "class",
};
export default config;
