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
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
