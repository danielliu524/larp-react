/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sword:
          "linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url('../public/images/sword.jpg')",
        mayflower:
          "linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url('../public/images/mayflower.jpg')",
        oneThirty:
          "linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url('../public/images/oneThirty.jpg')",
      },
    },
  },
  plugins: [],
};
