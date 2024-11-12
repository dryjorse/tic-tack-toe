/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");

const colors = {
  white: twColors.white,
  transparent: twColors.transparent,
  
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {
      padding: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
      },
      margin: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
      },
      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        24: "24px",
      },
      fontFamily: {
        "gotham-pro": "GothamPro",
        "golos-text": "Golos Text",
      },
      screens: {
        ublt: { max: "1440px" },
        blt: { max: "1200px" },
        lt: { max: "1024px" },
        slt: { max: "900px" },
        btb: { max: "834px" },
        tb: { max: "768px" },
        stb: { max: "540px" },
        bmb: { max: "425px" },
        mb: { max: "375px" },
        smb: { max: "340px" },
      },
    },
  },
  plugins: [],
};