import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: { DEFAULT: "#737A4A", dark: "#565C37" },
        champagne: { DEFAULT: "#E7D8BC", light: "#F2EBDD" },
        warmbg: "#F8F7F2",
        surface: "#FFFFFF",
        ink: "#171717",
        muted: "#737373",
        line: "#E7E4DC",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
