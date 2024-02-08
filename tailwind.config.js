/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        'hero-image': "url('/images/background.png')",
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(246, 153, 63, 0.5)',
      },
      backgroundColor: {
        disabled: '#FF8C00',
        enabled: 'rgb(234 88 12)',
      },
    },
  },
  plugins: [],
}
