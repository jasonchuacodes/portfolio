/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        default: "#06080B",
      },
      colors: {
        white: "#fff",
        dark: "",
        light: "#A0A7AD",
        neutral: "#545F69",
        disabled: "#293643",
        primary: {
          50: "#EEF5F9",
          100: "#ECF3F8",
          200: "#D5E0E7",
          300: "#A5C8DF",
          400: "#71A6C8",
          500: "#58809A",
          700: "#334F69",
          900: "#2D3D4D",
        }
      },
      fontFamily: {
        rubik: "Rubik",
        russo: "Russo One",
      },
    },
  },
  plugins: [],
};

