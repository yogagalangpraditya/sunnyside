/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        'Fraunces':['Fraunces', 'serif'],
        'Barlow': ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

