/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/screens/**/*.js',
    './src/components/**/*.js',
    './App.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001F2D",
        secondary: "#4D626C",
        white: "#FFF",
        gray: "#74858C",
      },
      fontFamily: {
        Bold: "InterBold",
        semiBold: "InterSemiBold",
        medium: "InterMedium",
        regular: "InterRegular",
        light: "InterLight",
      }
    },
  },
  plugins: [],
}
