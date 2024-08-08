import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'text': '#070708',
        'background': '#faf9fc',
        'primary': '#684bc2',
        'secondary': '#9980e8',
        'accent': '#7b55f5',
       },
       transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.075, 0.82, 0.165, 1)",
       },
       boxShadow: {
        "normal": "0 0 50px -22px"
       }
    },
  },
  plugins: [],
};
export default config;
