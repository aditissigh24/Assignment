
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          '0%': { 
            transform: 'translateX(100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards'
      }
    },
  },
  plugins: [],
}