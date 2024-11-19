/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        "darkMode": "#010B13",
        "lightMode": "#E7EDF9",
        "textWhite": "#F8F8FF",
        "textDark" : "#010B13",
        "textBlue": "#7C9ED9",
        "toggleButton": "#E7EDF9"
      }
    },
  },
  plugins: [],
}
  