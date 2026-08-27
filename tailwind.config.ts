import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        "bg-raised": "#141014",
        "bg-raised-2": "#19131a",
        ink: "#f6f1f3",
        "ink-dim": "#beabb8",
        "ink-faint": "#83717d",
        accent: "#c70079",
        "accent-dim": "#8f0058",
        line: "rgba(246,241,243,0.09)",
      },
      fontFamily: {
        heading: ["var(--font-rbno31)", "Georgia", "serif"],
        body: ["var(--font-dmsans)", "-apple-system", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
