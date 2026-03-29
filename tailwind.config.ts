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
        black: "#0a0a0a",
        white: "#f5f5f0",
        green: {
          DEFAULT: "#b8f424",
          dark: "#8cc918",
        },
        gray: {
          900: "#111110",
          800: "#1c1c1a",
          700: "#2a2a27",
          600: "#3d3d39",
          400: "#8a8a82",
          200: "#d4d4cc",
        },
      },
fontFamily: {
  display: ["TASA Orbiter", "sans-serif"],
  body: ["Host Grotesk", "sans-serif"],
},
      borderRadius: {
        pill: "9999px",
        card: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
