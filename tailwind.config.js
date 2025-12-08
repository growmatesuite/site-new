/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: {
          400: '#00FF88',
          300: '#33FF99',
        }
      },
      lineHeight: {
        'relaxed': '1.6',
      }
    },
  },
  plugins: [],
};