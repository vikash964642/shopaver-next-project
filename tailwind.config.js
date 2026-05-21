/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/Component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#5801B7",
      secondary: "#F6EDFF", 
  webgray: "#5F5F5F",
  webgray2:"#F5F5F5",
  webgray3:"#F3F3F3",
  webBlue:"#200E32",
  webtext:"#393939",
  lightgrey:"#D9D9D9",
  platiniumcolor:"#E7E7E7",
  webBorder: "#DCDCDC",
  BlackBox: "#1D1D1D",
  bordercolor:"#9E9E9E",
  bordercolor2:"#D4D4D4",
  webtext2:"#1B1B1B",
  bgform:"#FCFAFF",
  headerBorder: "#e5e7eb",
    },
     fontFamily: {
        bricolage: ["var(--font-bricolage)"],
        "dm-sans": ["var(--font-dm-sans)"],
        poppins: ["var(--font-poppins)"],
      },
      screens: {
        xm1:"375px",
        xm2:"425px",
        xl2: "1480px"
      },
  },
},
  plugins: [],
}