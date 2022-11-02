const plugin = require('tailwindcss/plugin')

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
      black: '#000'
    },

    fontSize: {
      16: '1rem',
    },

    extend: {
      // ..
    }
  },
  plugins: [
    // ..
  ]
}
