/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,    
      bold: 700,    
    },

    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '2rem',
        xl: '3.5rem',
      },
      
      center: true,
    },
    colors: {
      'primary': '#146284',
      'secondary': '#DBF66F',
      'lightprim': '#A4CADA',
    },
    extend: {},
  },
  plugins: [],
}
