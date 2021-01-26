module.exports = {
  purge: [
    './pages/**/*.ts',
    './pages/**/*.tsx',
    './components/**/*.ts',
    './components/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          hot: '#FDB6BC',
          pale: '#FFE6E8',
          dark: '#F2827F',
          darker: '#782D40',
          bright: '#F4CADA',
        },
        yellow: {
          pale: '#FFFBEA',
        },
        gray: {
          'semi-dark': '#444444',
        },
        'blue-green': '#BFF3EE',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
