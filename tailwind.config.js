/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        xs : '360px',
        s : '425px',
      },
      backgroundImage: {
        mainpage: 'url("/Blog7.jpg")',
      },
      colors:{
        newsBgColor:{
          default: "#E8EAED"
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('flowbite/plugin')
  ],
};
