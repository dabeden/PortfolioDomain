/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7",
          100: "#C9DAEA",
          300: "#517AA0"
        },
        yellow: {
          100:"#F3D99D"
        },
        bluegreen:{
          DEFAULT:"#90E6DD"
        },
        red: {
          100:"#EF626C"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        VT323: ['VT323', "sans-serif"],
        jersey10: ['Jersey 10', "sans-serif"],
        dynapuff: ['Dyna Puff'],
        silkscreen: ['Silkscreen'],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}