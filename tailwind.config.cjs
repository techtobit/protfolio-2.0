/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        300: "#3B3486",
        200: '#3F52E3',
        100: "#696eff",
        50: "hsl(238, 100%, 71%, 0.5)"
      },
      'white': {
        
        200: '#ffff',
        100: '#DCDCE4'
      },
      'black': {
        200: '#000000'
      },
      'red': {
        800: '#FF0000',
        700: '#ED0000',
        600: '#DB0000',
        500: '#FF0000'
      }
    },

  },
  
  plugins: [],
}
