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
    // fontFamily:{
    //   'Raleway':['Raleway','poppins']
    // },

    colors: {
      'primary': '#146284',
      'secondary': '#DBF66F',
      'lightprim': '#A4CADA',
      'dark': '#02212e',
    },
    extend: {
      backgroundImage: {
        'hero-right-lg': "url('../src/img/bkg.png')",
        'hero-right-mob': "url('../src/img/bkg_mob.png')",
        'hero-contact': "url('../src/img/cont_bg.png')",
        'hds': "url('../src/img/headshot.png')",
        'hdsabout': "url('../src/img/about_bkg.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode:'class'
}
