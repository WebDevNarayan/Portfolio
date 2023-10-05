/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: "Montserrat , sans-serfi",
        mont_alter: "Montserrat Alternates, sans-serif",
        sans: "Michroma, sans-serif",
        play: "Playfair Display, serif",
      },
    },
  },
  plugins: [],
};
