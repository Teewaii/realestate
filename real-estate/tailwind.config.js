/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',       
          lg: '3rem',
          xl: '5rem',

        },
        center: true
      },

      colors: {
        green: '#8DD69C',
        Darkgreen: '#60996c',
      }
    },
  },
  plugins: [],
}
