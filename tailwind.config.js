const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
    container: false
  },

  content: [
    './resources/js/**/*.{vue, js, ts, jsx, tsx}',
    './resources/views/**/*.php'
  ],
  safelist: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      red: colors.red,
      yellow: colors.yellow,
      stone: colors.stone,
      indigo: colors.indigo,
      green: colors.green


    },

    fontSize: {
      16: '1rem',
      24: '1.5rem',
      32: '2rem',
      48: '3rem'
    },

    extend: {
      // ..
    }
  },
  plugins: [
    // ..
  ]
}
