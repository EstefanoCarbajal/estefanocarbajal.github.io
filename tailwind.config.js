/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        night: '#070914',
        ink: '#0b1020',
        cyanGlow: '#38dff8',
        mintGlow: '#44f2b3',
        violetGlow: '#8f7bff',
      },
      boxShadow: {
        glow: '0 0 45px rgba(56, 223, 248, 0.18)',
        card: '0 24px 70px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'tech-grid':
          'linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
