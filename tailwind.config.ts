import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "rgba(255, 255, 255, 1)",
        black: "rgba(0, 0, 0, 1)",
        brand: {
          DEFAULT: "rgba(158, 119, 237, 1)",
          25: "rgba(252, 250, 255, 1)",
          50: "rgba(249, 245, 255, 1)",
          100: "rgba(244, 235, 255, 1)",
          200: "rgba(233, 215, 254, 1)",
          300: "rgba(214, 187, 251, 1)",
          400: "rgba(182, 146, 246, 1)",
          500: "rgba(158, 119, 237, 1)",
          600: "rgba(127, 86, 217, 1)",
          700: "rgba(105, 65, 198, 1)",
          800: "rgba(83, 56, 158, 1)",
          900: "rgba(66, 48, 125, 1)",
          950: "rgba(44, 28, 95, 1)",
        },
        primary: {
          DEFAULT: "rgba(16, 24, 40, 1)",
        },
        secondary: {
          DEFAULT: "rgba(228, 231, 236, 1)",
        },
        tertiary: {
          DEFAULT: "rgba(71, 84, 103, 1)",
        },
      },
      spacing: {
        none: "0rem",
        xxs: ".125rem",
        xs: ".25rem",
        sm: ".375rem",
        md: ".5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "4rem",
        "8xl": "5rem",
        "9xl": "6rem",
        "10xl": "8rem",
        "11xl": "10rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".display-xs": {
          fontSize: "1.5rem",
          lineHeight: "1.875rem",
        },
        ".display-sm": {
          fontSize: "1.875rem",
          lineHeight: "2.375rem",
        },
        ".display-md": {
          fontSize: "2.25rem",
          lineHeight: "2.75rem",
        },
        ".display-lg": {
          fontSize: "3rem",
          lineHeight: "3.75rem",
          letterSpacing: "-2%",
        },
        ".text-sm": {
          fontSize: ".875rem",
          lineHeight: "1.25rem",
        },
        ".text-md": {
          fontSize: "1rem",
          lineHeight: "1.5rem",
        },
        ".text-lg": {
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
        },
        ".text-xl": {
          fontSize: "1.25rem",
          lineHeight: "1.875rem",
        },
      });
    }),
  ],
};
export default config;
