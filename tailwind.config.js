/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Bebas Neue', 'sans-serif'],
        'secondary': ['Work sans', 'sans-serif'],
      },
      colors: {
        'primary': '#ec315a',
        'primaryLight': '#ec315a1f',
        'secondary': '#441d81',
        'lightBackgroundColor': '#fff4f1',
        'darkBackgroundColor': '#1c1919',
        'darkText': '#222222',
      },
    },
    plugins: [],
  }
}