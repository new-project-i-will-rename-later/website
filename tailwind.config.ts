import type { Config } from 'tailwindcss';

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      neutral: {
        100: '#FFFFFF',
        200: '#CCCCCC',
        300: '#666666',
        400: '#3B3B3B',
        500: '#262626',
        600: '#1D1D1D',
        700: '#141414',
        800: '#0A0A0A',
        900: '#000000',
      },
    },
  },
  plugins: [],
} satisfies Config;
