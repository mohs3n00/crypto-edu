/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Menlo', 'monospace'],
      },
      colors: {
        // Strict monochrome palette
        'white': '#FFFFFF',
        'near-white': '#FAFAFA',
        'light-gray': '#F2F2F2',
        'neutral-gray': '#E5E5E5',
        'medium-gray': '#A3A3A3',
        'dark-gray': '#525252',
        'near-black': '#171717',
        'black': '#000000',
      },
      maxWidth: {
        'content': '1200px',
        'reading': '820px',
        'toc': '240px',
      },
      lineHeight: {
        'relaxed-ar': '1.9',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

