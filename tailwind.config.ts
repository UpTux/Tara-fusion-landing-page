import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a1a',
        'brand-glass': 'rgba(10, 10, 26, 0.5)',
        'brand-accent': '#00f6ff',
        'brand-accent-dark': '#00c5cc',
        'brand-purple': '#8A2BE2',
      },
      boxShadow: {
        'glow': '0 0 15px 0 rgba(0, 246, 255, 0.5), 0 0 25px 0 rgba(0, 246, 255, 0.3)',
        'glow-sm': '0 0 8px 0 rgba(0, 246, 255, 0.3)',
      },
      animation: {
        'aurora': 'aurora 60s linear infinite',
        'fill-progress': 'fill-progress 7s linear forwards',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '0% 50%',
          },
          to: {
            backgroundPosition: '200% 50%',
          },
        },
        'fill-progress': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
