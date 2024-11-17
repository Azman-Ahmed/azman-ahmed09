import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: '#32CD32', 
        MidNightBlack: '#121212',
        LightGray: '#D3D3D3',
        Snow: '#FFFAFA',
        Black: '#000000',
        background: "var(--background)",
        foreground: "var(--foreground)",
        DeepNightBlack: "#121212",
        EveningBlack: "#1a1a1a",
        DarkGray: "#282828",
        SlateGray: "#404040",
        SilverGray: "#B3B3B3",
      },
    },
  },
  plugins: [],
} satisfies Config;
