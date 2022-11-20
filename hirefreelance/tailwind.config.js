/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",

      ],
    },
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '8rem',

        },
        center: true,
      },

      colors: {
        'primary': '#0056D6',
        'body': '#5B5B5B',
        'heading': '#2C3847',
        'location': '#343951',
        'title': '#9598A0',
        'grad': '#e1f1f7',
      },
      // screens: {
      //   '3xl': '1700px',
      // },
      backgroundImage: {
        'dekstopHero': "url('/img/desktopHero.svg')",
        'mobHero': "url('/img/mobHero.svg')",
        'journey': "url('/img/journey_watermark.svg')",
        'footer_wmk': "url('/img/footer_watermark.svg')",
        'service_wmk': "url('/img/serviceWatermark.svg')",
      },


    },

  },
  plugins: [require('tailwind-scrollbar-hide')],
}
