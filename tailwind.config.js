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
          navy: {
            DEFAULT: '#111A55',
            deep: '#0B123D',
            light: '#1B266B',
            muted: '#27347D',
          },
          teal: {
            DEFAULT: '#16B8B5',
            bright: '#20C7C2',
            light: '#E8FAF9',
            dark: '#0E8D8A',
            glow: '#72E5E2',
          },
          bg: {
            DEFAULT: '#FFFFFF',
            soft: '#F6F9FC',
            card: '#FFFFFF',
            subtle: '#EEF3F8',
          },
          text: {
            primary: '#111827',
            secondary: '#667085',
            muted: '#94A3B8',
          },
          border: {
            DEFAULT: '#E5EAF1',
            subtle: '#F1F4F9',
            focus: '#16B8B5',
          },
          success: {
            DEFAULT: '#159A72',
            light: '#E6F7F1',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'btn': '12px',
        'pill': '9999px',
        'box': '16px',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(17, 26, 85, 0.04)',
        'card': '0 8px 30px rgba(17, 26, 85, 0.06)',
        'card-hover': '0 16px 40px rgba(17, 26, 85, 0.12)',
        'teal-glow': '0 4px 20px rgba(22, 184, 181, 0.25)',
        'navy-glow': '0 8px 30px rgba(11, 18, 61, 0.28)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
