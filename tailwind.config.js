/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fefaec',
          '100': '#fbf1ca',
          '200': '#f7e190',
          '300': '#f3cc56',
          '400': '#f0b82f',
          '500': '#ea9e23',
          '600': '#ce7411',
          '700': '#ab5212',
          '800': '#8b4115',
          '900': '#733614',
          '950': '#421a06',
        },
        'secondary': {
          '50': '#eff5fe',
          '100': '#e3ebfc',
          '200': '#ccdbf9',
          '300': '#adc3f4',
          '400': '#8ba1ee',
          '500': '#6f82e5',
          '600': '#545fd7',
          '700': '#454cbd',
          '800': '#3a4199',
          '900': '#353b7a',
          '950': '#161832',
        },
        'alternative': {
          '50': '#f5f6fa',
          '100': '#eaebf4',
          '200': '#d0d4e7',
          '300': '#a6afd3',
          '400': '#7787b9',
          '500': '#5567a2',
          '600': '#424f87',
          '700': '#36406e',
          '800': '#30395c',
          '900': '#2c324e',
          '950': '#090a10',
        },
      },
      backgroundImage: {
        'texture-1': "url('./src/assets/images/Hero.png')",
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
