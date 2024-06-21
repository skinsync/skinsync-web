import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      serif: ['var(--font-serif)'],
      italiano: ['var(--font-italiano)']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        retro: {
          ...require("daisyui/src/theming/themes")["retro"],
          "base-100": "#ffffff",
          "primary": "#F9A296",
          "primary-content": "#ffffff",
          "neutral": "595455",
        },
      },
    ],
  },
};
export default config;
