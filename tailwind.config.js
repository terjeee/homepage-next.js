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
      orange: "#FFA400",
      link: "#0969da",
      darkBg: "#121212",
      darkBgSecondary: "rgba(255, 255, 255, 0.12)",
    },
    extend: {
      boxShadow: {
        github: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 1px",
      },
      animation: {
        slideShow: "slideShow 50s linear infinite",
      },
      keyframes: {
        slideShow: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
