/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs : '360px',
        s : '425px',
      },
      backgroundImage: {
        mainpage: 'url("/blog7.jpg")',
      },
      colors:{
        newsBgColor:{
          default: "#E8EAED"
        },
      }
    },
  },
  plugins: [],
};
