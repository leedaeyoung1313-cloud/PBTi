import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pbti-bg": "#FFF9F3",
        "pbti-nt": "#6B8AF6",
        "pbti-nf": "#A379FF",
        "pbti-sj": "#4FC28A",
        "pbti-sp": "#FF9B52",
      },
    },
  },
  plugins: [],
};

export default config;
