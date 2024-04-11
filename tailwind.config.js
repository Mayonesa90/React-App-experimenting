/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'throwupColor-Pink': ['ThrowupColor-Pink']
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.falling-down': {
          transform: 'translateY(-500px)',
        }
      }

      addUtilities(newUtilities, {
        variants: ['responsive', 'hover']
      })
    })
  ]
}

