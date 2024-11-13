/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage:{
        'bg1' : "url('/src/assets/bg/bg2-2.jpg')",
        'bg2' : "url('/src/assets/bg/bg1-1.jpg')",
        'bg3' : "url('/src/assets/bg/bg-white3.jpg')",
        'bg4' : "url('/src/assets/bg/bg4-4.jpg')",
        'bg5' : "url('/src/assets/images/ondo1.jpg')",
        'bg6' : "url('/src/assets/images/ondo2.jpg')",
      }
    },
  },
  plugins: [],
}