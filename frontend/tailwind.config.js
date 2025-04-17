/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#f8fafc",
        "accent": "#d4d4d8",
        "primary": "#38bdf8",
        "secondary": "#3b82f6",
        "text": "#27272a"
      },
      fontFamily: {
        "poppins": ["Poppins"]
      }
    },
  },
  plugins: [],
}