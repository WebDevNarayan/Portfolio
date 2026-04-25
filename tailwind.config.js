/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont:       ['Montserrat', 'sans-serif'],
        mont_alter: ['Montserrat Alternates', 'sans-serif'],
        sans:       ['Montserrat', 'sans-serif'],
        mono:       ['JetBrains Mono', 'monospace'],
        play:       ['Playfair Display', 'serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      colors: {
        brand: '#ff6200',
      },
    },
  },
  plugins: [],
};
