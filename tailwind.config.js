/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      blue: "#1e40af",
      zinc: "#27272a",
      slate: "#1e293b",
      red: "#b91c1c",
      emerald: "#059669",
      cyan: "#164e63",
      rose: "#fb7185",
      white: "#fafafa",
      black: "#0a0a0a",
      purple: "#581c87",
      yellow: "#fde047",
      green: "#15803d",
      bucks: "#14532d",
      gray: "#e5e7eb",
      dirty: "#64748b",
    },

    extend: {
      screens: {
        "3xs": "320px",
        "2xs": "375px",
      },
      zIndex: {
        "-1": "-1",
        "-2": "-2",
      },
      spacing: {
        480: "480px",
        500: "500px",
        900: "900px",
      },
      fontFamily: {
        sporty: ["Sports World", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
