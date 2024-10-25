/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text":"#131313"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

