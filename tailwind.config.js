/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Alexandria', 'Cairo', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Menlo', 'monospace'],
      },
      colors: {
        // Soft Monochrome palette tokens
        'edu-bg': '#F7F7F5',
        'edu-surface': '#FFFFFF',
        'edu-primary': '#222222',
        'edu-secondary': '#505050',
        'edu-muted': '#686868',
        'edu-border': '#E2E2DF',
        'edu-border-strong': '#D4D4D0',
        'edu-hover': '#ECEDEB',
        'edu-selected': '#E8E8E5',
        'edu-disabled-bg': '#EFEFEC',
        'edu-disabled-text': '#777777',
        'edu-action': '#222222',
        'edu-action-hover': '#000000',
        'edu-action-text': '#FFFFFF',
        'edu-keyword': '#FFF1A6',

        // Legacy compatibility mappings updated to Soft Monochrome
        'white': '#FFFFFF',
        'near-white': '#F7F7F5',
        'light-gray': '#ECEDEB',
        'neutral-gray': '#E2E2DF',
        'medium-gray': '#686868',
        'dark-gray': '#505050',
        'near-black': '#222222',
        'black': '#222222',
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

