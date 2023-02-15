/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*{jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('../assets/image-web-3-desktop.jpg')",
        'hero-mobile':"url('../assets/image-web-3-mobile.jpg')",
        'main':"url('../assets/ttten.svg')"
      },
      fontFamily:{
        'poppins':['Poppins']
      }
    },
  },
  plugins: [],
}
