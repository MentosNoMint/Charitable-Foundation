/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['namu-medium', 'sans-serif'],
      },
      colors: {
        'black-gray': '#A4A4A4',
        'main-green': '#CAF595',
        'light-gray': '#F6F8FA',
      }
    },
  },
  plugins: [],
}

