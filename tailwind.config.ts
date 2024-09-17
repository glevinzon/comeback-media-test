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
        tertiary: {
          DEFAULT: "rgba(71, 84, 103, 1)",
        },
      },
      typography: {},
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".display-lg": {
          fontSize: "3rem",
          lineHeight: "3.75rem",
          letterSpacing: "-2%",
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
