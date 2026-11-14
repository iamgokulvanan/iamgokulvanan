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
        brand: {
          bg: '#08090C',        // Deep Black primary background
          surface: '#111318',   // Charcoal secondary background
          card: '#141720',      // Elevated glass card
          cardHover: '#1A1E2B', // Hover state
          border: '#1E2330',    // Subtle border
          borderLight: '#2D3548',
          accent: '#38BDF8',    // Sky blue accent
          accentGlow: 'rgba(56, 189, 248, 0.25)',
          text: '#F8FAFC',      // Soft white
          muted: '#94A3B8',     // Muted slate
          dim: '#64748B',       // Dim text
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Cabinet Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(56, 189, 248, 0.6))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'cyan-glow': '0 0 35px -5px rgba(56, 189, 248, 0.3)',
        'cyan-soft': '0 8px 30px rgba(56, 189, 248, 0.12)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
