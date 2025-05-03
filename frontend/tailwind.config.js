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
      fontFamily: {
        "poppins": ["Poppins"]
      },
      colors: {
        // Primary Colors
        'rich-black': '#0D0F11',
        'dark-green': '#022221',
        'bangladesh-green': '#09624C',
        'mountain-meadow': '#22C995',
        'caribbean-green': '#00DEB1',
        'anti-flash-white': '#F7F7F6',
  
        // Secondary Colors
        'secondaryBackground': "#18181b",
        'pine': '#063B28',
        'basil': '#08453A',
        'forest': '#095544',
        'frog': '#17B790',
        'mint': '#24A68C',
        'stone': '#707D7D',
        'pistachio': '#ACDEC4',
      },
    },
  },
  plugins: [],
}