/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
      },
      colors: {
        crimson: '#DC143C',
        darkMagenta: '#8B008B',
        floralWhite: '#FFFAF0',
      },
      boxShadow: {
        'costum': '2px 2px 6px 0px rgba(0, 0, 0, 0.5)',
        'dark': '2px 2px 6px 0px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
