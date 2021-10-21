module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		colors: {
        'gray-990': '#111111',
		'gray-950': '#353535',
      }
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
