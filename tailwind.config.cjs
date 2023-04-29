/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile':  { 'min': '320px', 'max': '668px'}
      }
    },
  },
  plugins: [],
};
