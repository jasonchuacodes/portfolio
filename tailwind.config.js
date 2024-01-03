/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      russo: ["Russo One", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      h1: ["40px"],
      h2: ["32px"],
      h3: ["24px"],
      h4: ["18px"],
      h5: ["14px"],
      "p1-r": ["16px", { lineHeight: "30px" }],
      "p1-b": ["16px", { fontWeight: "600" }],
      "p2-r": ["14px", { lineHeight: "30px" }],
      "p2-b": ["14px", { fontWeight: "600" }],
      "p3-r": ["12px", { lineHeight: "30px" }],
      "p3-b": ["12px", { fontWeight: "600" }],
      "l1-r": ["20px", { lineHeight: "30px" }],
      "l1-b": ["20px", { fontWeight: "600" }],
      "l2-r": ["14px", { lineHeight: "30px" }],
      "l2-b": ["14px", { fontWeight: "600" }],
      "l3-r": ["12px", { lineHeight: "30px" }],
      "l3-b": ["12px", { fontWeight: "600" }],
    },
    colors: {
      white: "#fff",
      dark: "#293743",
      light: "#A0A7AD",
      neutral: "#545F69",
      disabled: "#293643",
      sidebar: "rgba(33,33,33,0.5)",
      sidebarHover: "rgba(51,51,51,0.8)",
      primary: {
        50: "#EEF5F9",
        100: "#ECF3F8",
        200: "#D5E0E7",
        300: "#A5C8DF",
        400: "#71A6C8",
        500: "#58809A",
        700: "#334F69",
        900: "#2D3D4D",
      },
    },
    extend: {
      backgroundColor: {
        default: "#06080B",
      },
      backgroundImage: {
        'dots-pattern': "url('images/background-dots.png')"
      } 
    },
  },
  plugins: [],
};

