/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#5D4037', // Nâu đất
          green: '#388E3C', // Xanh lá rừng
          light: '#EFEBE9', // Màu be sáng
          accent: '#F57C00', // Vàng cam
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'bounce-subtle': 'bounce-subtle 2s infinite',
      }
    },
  },
  plugins: [],
}