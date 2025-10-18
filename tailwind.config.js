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
          light: '#0079BF',
          dark: '#4A90E2',
        },
        gold: {
          DEFAULT: '#F0B331',
          light: '#F0B331',
          dark: '#FFD700',
        },
        cream: {
          DEFAULT: '#FDF4E7',
          light: '#FDF4E7',
          dark: '#2D2D2D',
        },
        accent: {
          DEFAULT: '#CCE6F5',
          light: '#CCE6F5',
          dark: '#1A365D',
        },
        // Dark theme colors
        dark: {
          primary: '#1A1A1A',
          secondary: '#2D2D2D',
          tertiary: '#404040',
          text: '#E5E5E5',
          'text-secondary': '#B0B0B0',
          border: '#404040',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
