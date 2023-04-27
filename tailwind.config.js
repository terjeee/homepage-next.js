/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      schoolbell: ["Schoolbell", "cursive"],
      silkscreen: ["Silkscreen", "cursive"],
      silkscreen: ["Loto", "sans-serif"],
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
