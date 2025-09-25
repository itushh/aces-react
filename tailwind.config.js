/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter)'],
        title: ['var(--font-oswald)'],
      },
      colors: {
        primary: '#7D111C', // ACES Red 
        secondary: '#A07C38', // ACES Golden
        beige: '#EFE6D8' // Beige
      }
    },
  },
  plugins: [],
}