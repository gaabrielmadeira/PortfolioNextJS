/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/background.png')",
      },
      fontFamily: {
        mono: ['IBM_Plex_Mono', 'monospace'],
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
