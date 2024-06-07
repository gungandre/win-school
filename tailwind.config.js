/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Helixa"', "sans-serif"],
    },
    extend: {
      fontFamily: {
        helixa: ['"Helixa"'],
        seagull: ['"Seagull"'],
      },
      fontSize: {
        desktop: ["0.938vw", "1.094vw"], // 18px, 21px
        "32-headings": ["1.667vw", "1.979vw"], // 32px, 38px
        "64-headings": ["3.333vw", "3.542vw"], // 64px, 68px
        "102-headings": ["5.313vw", "5.156vw"], // 102px, 99px
        "522-headings": ["27.188vw", "26.615vw"], // 522px, 511px
        "24-body-text": ["1.25vw", "1.719vw"], // 24px, 33px
        "28-body-text-1": ["1.458vw", "1.719vw"], // 28px, 33px
        "20-body-text-2": ["1.042vw", "1.354vw"], // 20px, 26px
      },
      colors: {
        "dark-tosca": "#19918E",
        "soft-tosca": "#5EBFB3",
        "white-ivory": "#FFFBF3",
        "sunset-coral": "#F96D49",
        "almond-cream": "#EEE7D9",
        "moonstone-gray": "#A9A6A0",
      },
      padding: {
        15: "60px",
      },
      borderRadius: {
        "2lg": "10px",
        "1xl": "15px",
      },
    },
  },
  plugins: [],
};
