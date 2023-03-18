/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': '484px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui")],
}
