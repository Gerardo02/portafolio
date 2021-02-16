const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)'
      },
      fontFamily: {
        custom: ['Inter', 'Arial'],
      }
    },
    
  },
  variants: {},
  plugins: [],
}
