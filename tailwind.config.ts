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
        "verde-oscuro": "#08B819",
        "verde-claro": "#E6FDE8",
        "verde-medio": "#CDFBD0",
        "gris-texto": "#1A1A1A",
        "gris-secundario": "#64748B",
        "gris-borde": "#E2E8F0",
        "gris-fondo": "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-exo2)", "sans-serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #f0fdf4 0%, #ffffff 60%, #f0fdf4 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
