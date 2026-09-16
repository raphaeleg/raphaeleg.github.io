/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './.contentlayer/generated/**/*.mjs',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
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
      screens: {
        sxl: "1180px",
        xs: "480px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}