/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      silkscreen: ["Silkscreen", "cursive"],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      lightGrey: "#f0f0f0",
      darkGrey: "rgba(169, 169, 169, 1)",
      blue: "#0969da",
      red: "#FF1B1C",
      purple: "#DC6BAD",
      orange: "#FF9000",
      link: "#0969da",
      darkBg: "#040404",
      darkSecondary: "#191919",
    },
    extend: {
      boxShadow: {
        github: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px",
      },
      keyframes: {
        slideShow: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        bgRainbow: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        slideShow: "slideShow 50s linear infinite",
        bgRainbow: "bgRainbow 2s linear infinite",
        fadeOut: "fadeOut 0.5s ease-in"
      },
    },
  },
  plugins: [],
};
