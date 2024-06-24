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
      animation: {
        scale: "scale-animation 1s",
      },
      keyframes: {
        "scale-animation": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "active"]);
    },
  ],
};
