/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      fontFamily: {
        optitomaso: ["Optitomaso", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        serif: ["OPTIBakerDanmark", "serif"],
      },
      colors: {
        primary: "#F08E75",
        primaryLight: "#f8c7ba",
        primaryDark: "#2a150f",
        secondary: "#f7c6ba",
        black: "#262626",
        cream: "#F4F1F0",
        transparent: "transparent",
      },
      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
      },
      gap: {
        hamburger: "5px",
      },
      height: {
        line: "3px",
      },
      letterSpacing: {
        widest: "0.2em",
        banner: "0.8em",
      },
      maxWidth: {
        unset: "unset",
      },
      width: {
        hamburger: "30px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwindcss-animate"),
  ],
};
