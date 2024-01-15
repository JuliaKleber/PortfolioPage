/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'sans-serif'],
      },
      colors: {
        crimson: '#DC143C',
        floralwhite: '#FFFAF0',
      },
      boxShadow: {
        'costum': '2px 2px 6px 0px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
