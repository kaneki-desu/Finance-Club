/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["Archivo","sans-serif"],
      },
      screens: {
        'mobile': { 'max': '500px' },
        'pc': '650px',
        'pc2xl': { 'max': '1535px' }, // => @media (max-width: 1535px) { ... }
        'pcxl': { 'max': '1279px' }, // => @media (max-width: 1279px) { ... }
        'pclg': { 'max': '1023px' }, // => @media (max-width: 1023px) { ... }
        'pcmd': { 'max': '767px' }, // => @media (max-width: 767px) { ... }
        'pcsm': { 'max': '639px' }, // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}