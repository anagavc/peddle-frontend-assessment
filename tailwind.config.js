/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#1f0041",

        pry: {
          50: "#271AC1",
          100: "#01595A",
          200: "#7F1E7B",
        },
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        bgImage: "url('./images/bgImage.svg')",
      },
    },
  },
  plugins: [],
};
