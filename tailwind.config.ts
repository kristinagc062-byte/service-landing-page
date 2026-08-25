import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#102033",
          muted: "#5C6B7C",
          primary: "#5A1D52",
          secondary: "#9B4A7B",
          soft: "#F8EEF6",
          warm: "#FFF7ED",
        },
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 32, 51, 0.10)",
        glow: "0 18px 55px rgba(90, 29, 82, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
