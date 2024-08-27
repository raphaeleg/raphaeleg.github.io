/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accentLight: "#fdf7f3",
        accent: "#D4591E",
        accentDark: "#55240c",
        gray: "#747474",
      },

      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"]
      },
    },
  },
  plugins: [],
}