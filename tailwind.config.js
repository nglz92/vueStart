const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height:{
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        'screen-1/2': '50vh',
        'screen-1/4': '25vh',
      },
      // fontFamily:{
      //   'sans-serif':[ 'Quicksand', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...defaultTheme.fontFamily.sans],
      //   'serif':[],
      //   'flow':['Great Vibes']
      // },
      colors: {
        'primary': '#1b1b1b',
        'secondary': '#BD9850',
        'white': '#fff',
        'black': '#000000',
        'blue': '#080dcc'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
