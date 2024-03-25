/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: [ 'responsive', 'hover', 'focus', 'active'],

      textColor: [ 'responsive', 'hover', 'focus', 'active'],

      fontFamily:{
        custom:['Space Grotesk,  sans-serif']
      },

      colors:{
        cyan:'#4EE1A0',
        lightGrey:'#D9D9D9',
        deepGrey:'#242424',
        lightBlack:'#151515',
      },
    },
  },
  plugins: [
    
  ],
}

