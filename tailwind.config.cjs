/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#E40613",
        bluePrimary: '#322783'
      }
      
    },
    screens: {
      'main': '1170px'
    }
    
  },
  plugins: [],
}
