/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',

  theme: {
    extend: {
      colors: {
        'primary-light': '#fbf5f3',
        'primary-dark': '#000022',
        secondary: '#5228c4',
        'secondary-dark': '#351784',
        accent: '#d14c23',
        'accent-dark': '#9D3717',
      },
      fontFamily: {
        Satoshi: ['Satoshi', 'sans-serif'],
        'Gothink-bold': ['Gothink-Bold', 'sans-serif'],
        'Gothink-light': ['Gothink-extra-light', 'sans-serif'],
        'Gothink-italic': ['Gothink-italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
