/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0079BF',
          dark: '#4A90E2',
        },
        gold: {
          DEFAULT: '#F0B331',
          dark: '#FFD700',
        },
        cream: '#FDF4E7',
        accent: '#CCE6F5',
        dark: {
          primary: '#1A1A1A',
          secondary: '#2D2D2D',
          tertiary: '#3A3A3A',
          border: '#404040',
          text: '#E5E5E5',
        },
      },
    },
  },
  plugins: [],
}
