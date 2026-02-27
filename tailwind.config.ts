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
        "verde-principal": "#0ADC1E",
        "verde-oscuro":    "#08B819",
        "verde-claro":     "#E6FDE8",
        "azul-marino":     "#01007A",
        "azul-marino-md":  "#0000A3",
        "azul-marino-lt":  "#E8E8F8",
      },
      fontFamily: {
        heading: ["var(--font-exo2)", "sans-serif"],
        body:    ["var(--font-source-sans)", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
