/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090D16',
          surface: '#0d1322',
          card: '#111827',
          border: '#1E293B',
          hover: '#1F2937',
          muted: '#94A3B8',
          text: '#F8FAFC',
          subtle: '#64748B',
        },
        light: {
          bg: '#F8FAFC',
          surface: '#F1F5F9',
          card: '#FFFFFF',
          border: '#E2E8F0',
          hover: '#F1F5F9',
          muted: '#64748B',
          text: '#0F172A',
          subtle: '#94A3B8',
        },
        brand: {
          indigo: {
            DEFAULT: '#4F46E5',
            50: '#EEF2FF',
            100: '#E0E7FF',
            200: '#C7D2FE',
            300: '#A5B4FC',
            400: '#818CF8',
            500: '#6366F1',
            600: '#4F46E5',
            700: '#4338CA',
            800: '#3730A3',
            900: '#312E81',
            glow: 'rgba(79, 70, 229, 0.25)',
          },
          emerald: {
            DEFAULT: '#10B981',
            50: '#ECFDF5',
            100: '#D1FAE5',
            500: '#10B981',
            600: '#059669',
            glow: 'rgba(16, 185, 129, 0.2)',
          },
          rose: {
            DEFAULT: '#F43F5E',
            50: '#FFF1F2',
            100: '#FFE4E6',
            500: '#F43F5E',
            600: '#E11D48',
            glow: 'rgba(244, 63, 94, 0.2)',
          },
          amber: {
            DEFAULT: '#F59E0B',
            50: '#FFFBEB',
            100: '#FEF3C7',
            500: '#F59E0B',
            600: '#D97706',
          },
          violet: {
            DEFAULT: '#8B5CF6',
            50: '#F5F3FF',
            500: '#8B5CF6',
            600: '#7C3AED',
          },
          cyan: {
            DEFAULT: '#06B6D4',
            500: '#06B6D4',
          }
        }
      },
      fontFamily: {
        sans: [
          'Satoshi',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-indigo': '0 0 20px -3px rgba(79, 70, 229, 0.35)',
        'glow-emerald': '0 0 20px -3px rgba(16, 185, 129, 0.35)',
        'card-light': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
