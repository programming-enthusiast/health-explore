module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      gridTemplateRows: {
        '3-auto': 'repeat(3, auto)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
