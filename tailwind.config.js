/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zuvo: {
          black: '#000000',
          dark: '#080808',
          surface: '#111111',
          surfaceBorder: 'rgba(255, 255, 255, 0.10)',
          white: '#FFFFFF',
          textSecondary: '#B8B8B8',
          textMuted: '#777777',
          cyan: '#00D2FF',
          blue: '#0052D4',
          purple: '#928DAB',
        }
      },
      backgroundImage: {
        'zuvo-gradient': 'linear-gradient(135deg, #0052D4 0%, #00D2FF 50%, #7928CA 100%)',
        'zuvo-accent': 'linear-gradient(90deg, #0052D4 0%, #00D2FF 50%, #928DAB 100%)',
        'zuvo-glow': 'radial-gradient(circle, rgba(0,210,255,0.15) 0%, rgba(0,82,212,0.05) 50%, transparent 70%)',
        'dark-radial': 'radial-gradient(circle at center, #111111 0%, #080808 60%, #000000 100%)',
      },
      boxShadow: {
        'zuvo-glow': '0 0 30px rgba(0, 210, 255, 0.25)',
        'zuvo-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
