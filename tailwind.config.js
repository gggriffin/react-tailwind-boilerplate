module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        primary: "#5EFC8D",
      },
      white: "#FFFFFF",
      black: "#141414",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "header-text": ["Frijole", "cursive"],
        "main-content-text": ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
