/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ["var(--font-roboto-slab)", "serif"],
      },
    },
    theme: {
      screens: {
        'xs': '320px',
        // ... other breakpoints
      }
    }
  },
  plugins: [],
};
