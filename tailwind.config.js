/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D80707",
        secondary: "#29292B",
        hover: "#E04747",
        text: "#CDFAFA",
      },
      fontFamily: {
        josefin: ["josefin sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
