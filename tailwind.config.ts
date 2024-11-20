import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pakistan': "url('/image/Flag_of_Pakistan.svg.png')",
        'canada': "url('/image/canada.png')",
        'malaysia': "url('/image/malaysia.png')",
        'spain': "url('/image/spain.png')",
        'saudiArabia': "url('/image/saudiArabia.png')"

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
