/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      xxl: "1440px",
    },
    fontFamily: {
      sans: ["Optitomaso", "sans-serif"],
      serif: ["OPTIBakerDanmark", "serif"],
    },
    letterSpacing: {
      widest: "0.2em",
    },
    extend: {},
  },
  plugins: [],
};
