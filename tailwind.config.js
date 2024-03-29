module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mountains': 'url("/bg-mountains.jpg")',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
    },
  },
  plugins: [],
}
