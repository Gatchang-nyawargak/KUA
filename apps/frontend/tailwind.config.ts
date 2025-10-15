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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" } as Record<string, any>,
          "100%": { opacity: "1", transform: "translateY(0)" } as Record<string, any>,
        },
      },
      animation: {
        "slide-in": "slideIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
