/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0E1B30',
          navyLight: '#162943',
          teal: '#26C4B1',
          tealLight: '#4DE0CE',
          orange: '#FFAA4D',
          orangeHover: '#FF9526',
          white: '#F7FAFD',
          bgLight: '#F3F6FA',
          body: '#243447',
          muted: '#627D98'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Noto Sans Oriya', 'Inter', 'system-ui', 'sans-serif'],
        odia: ['Noto Sans Oriya', 'Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(14, 27, 48, 0.12)',
        'glass-hover': '0 12px 40px 0 rgba(38, 196, 177, 0.2)',
        '3d': '0 10px 0 0 #0E1B30, 0 20px 25px -5px rgba(0, 0, 0, 0.25)',
        'card-3d': '0 6px 0 0 #162943, 0 12px 20px -3px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}
