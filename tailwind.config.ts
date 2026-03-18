import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%":       { transform: "translate(5%, -8%) scale(1.08)" },
          "66%":       { transform: "translate(-4%, 5%) scale(0.95)" },
        },
      },
      animation: {
        blob: "blob 8s ease-in-out infinite",
        "blob-slow": "blob 12s ease-in-out infinite",
        "blob-slower": "blob 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
