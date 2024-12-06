import type { Config } from 'tailwindcss'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F1',
        dark: '#1A1A1A',
        olive: {
          light: '#8B9D77',
          DEFAULT: '#5C6F4C',
          dark: '#445239'
        },
        earth: {
          light: '#D4C5B9',
          DEFAULT: '#9C8B7D',
          dark: '#6B5D52'
        },
        sage: '#B7C4B1',
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-lato)'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
} satisfies Config

export default config
