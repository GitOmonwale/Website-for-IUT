 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
backgroundImage:{
  'hero': "url('/assets/accueil.jpg')",
  'decanat-1': "url('/assets/decanat-1.jpg')",
  'decanat-2': "url('/assets/decanat-2.jpg')"
  // 'hero': "url('/assets/hero-partten.svg')",
  // 'hero': "url('/assets/hero-partten.svg')",
  // 'hero': "url('/assets/hero-partten.svg')",
},
      colors: {
        'blue': '#0540f2',
        'gradient-custom': 'linear-gradient(to right, theme("colors.red.500"), theme("colors.purple.500")))',
      },

      width:{
        '500':'500px'
      },
      maxWidth:{
        '500':'500px',
        '700':'700px'
      },
      height:{
        '600':'600px',
        '400':'400px',
        '500':'500px',
      },
      fontFamily: {
        belanosima: ['Belanosima', 'sans-serif'],
        poppins:['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}