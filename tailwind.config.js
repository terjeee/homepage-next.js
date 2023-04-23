/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      lightGrey: "#f0f0f0",
      blue: "#0969da",
      red: "#FF1B1C",
      purple: "#DC6BAD",
      orange: "#FFA400",
    },
  },
  plugins: [],
};
