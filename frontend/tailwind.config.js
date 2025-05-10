/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontSize: {
        xxs: '0.6rem',},
      fontFamily: {
        "poppins": ["Poppins"]
      },
      colors: {
        
      // light
      // "primary": "#6366f1",
      // "secondary": "#4f46e5",
      // "tertiary": "#4338ca",
      // "text": "#09090b",
      // "background": "#e0e7ff",
      // "secondaryBackground": "#c7d2fe",

      "primary": "#3b82f6",
      "secondary": "#2563eb",
      "tertiary": "#1d4ed8",
      "text": "#09090b",
      "background": "#e0e7ff",
      "secondaryBackground": "#c7d2fe",

      //
      "darkPrimary": "#8b5cf6",
      "darkSecondary": "#7c3aed",
      "darkTertiary": "#6d28d9",
      "darkText": "#f8fafc",
      "darkBackground": "#0f172a",
      "darkSecondaryBackground": "#020617"

      },
    },
  },
  plugins: [],
}