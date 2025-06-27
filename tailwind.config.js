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
          50: '#FFF5E6',
          100: '#FFE4BF',
          200: '#FFD199',
          300: '#FFBE73',
          400: '#FFAB4D',
          500: '#FF9826', // Main brand color
          600: '#FF8500',
          700: '#CC6A00',
          800: '#995000',
          900: '#663500',
        },
        secondary: {
          50: '#F5F7FF',
          100: '#E5EBFF',
          200: '#D6E0FF',
          300: '#ADC1FF',
          400: '#84A2FF',
          500: '#5B83FF', // Secondary accent
          600: '#3264FF',
          700: '#0037DB',
          800: '#002AA3',
          900: '#001C6B',
        },
        success: {
          50: '#ECFDF3',
          100: '#D1FAE1',
          200: '#A7F3C9',
          300: '#6EE7AC',
          400: '#34D399',
          500: '#10B981', // Success green
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Warning orange
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Info blue
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444', // Error red
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        text: {
          DEFAULT: '#1F2937', // Base text color
          light: '#6B7280', // Secondary text
          muted: '#9CA3AF', // Muted text
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F9FAFB',
          muted: '#F3F4F6',
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#D1D5DB',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 4px 0 rgba(0,0,0,0.05)',
        'soft': '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
        'soft-md': '0 6px 10px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
        'soft-lg': '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
