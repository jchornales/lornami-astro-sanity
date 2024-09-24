/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Optitomaso", "sans-serif"],
      serif: ["OPTIBakerDanmark", "serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primary: "#F08E75",
        secondary: "#f7c6ba",
        black: "#262626",
        cream: "#F4F1F0",
        transparent: "transparent",
      },
      transitionDelay: {
        600: "600ms",
        400: "400ms",
      },
      gap: {
        hamburger: "5px",
      },
      height: {
        line: "3px",
      },
      letterSpacing: {
        widest: "0.2em",
      },
      maxWidth: {
        unset: "unset",
      },
      width: {
        hamburger: "30px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
