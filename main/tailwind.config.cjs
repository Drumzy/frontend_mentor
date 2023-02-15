/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*{jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('./src/assets/image-web-3-desktop.jpg')",
        'hero-mobile':"url('./src/assets/image-web-3-mobile.jpg')"
      }
    },
  },
  plugins: [],
}
