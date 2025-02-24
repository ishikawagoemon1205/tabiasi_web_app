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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray5: "#0D0D0D",
        gray4: "#262626",
        gray3: "#595959",
        gray2: "#A6A6A6",
        gray1: "#F2F2F2",
      },
    },
  },
  plugins: [],
} satisfies Config;
