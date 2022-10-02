/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/index.html"
  ],
  theme: {
    extend: {
      colors: {
        bash: '#19a1ad',
      },
    },
  },
  plugins: [],
}
