import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#020407',
        panel: '#0B0F17',
        line: 'rgba(255, 255, 255, 0.08)',
        accent: {
          blue: '#89B4FF',
          cyan: '#6DF0D2',
          gold: '#D7C29E',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 60px rgba(6,12,28,0.45)',
        soft: '0 12px 40px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at top, rgba(137,180,255,0.14), transparent 38%), radial-gradient(circle at 80% 10%, rgba(109,240,210,0.12), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animation: {
        drift: 'drift 20s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
