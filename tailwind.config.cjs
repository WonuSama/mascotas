/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // azul principal
          light: '#3b82f6',
          dark: '#1e40af',
        },
        secondary: '#f1f5f9', // gris claro
        accent: '#fbbf24', // amarillo
        success: '#22c55e', // verde
        warning: '#f59e42', // naranja
        info: '#6366f1', // violeta
        text: {
          DEFAULT: '#222',
          light: '#555',
          muted: '#888',
        },
        card: '#fff',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 