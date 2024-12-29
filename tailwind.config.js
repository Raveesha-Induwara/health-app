/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0070FF',
        },
        dark: {
          DEFAULT: '#263446',
        },
        gray: {
          DEFAULT: '#788AA5',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        lightGrey: {
          DEFAULT: '#EFEFFA',
        },
      },
      flex: {
        0.2: '0.2',
        0.3: '0.3',
        0.5: '0.5',
        0.7: '0.7',
        0.9: '0.9',
      },
    },
  },
  plugins: [],
};
