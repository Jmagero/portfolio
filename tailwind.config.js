module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        about: "url('./flame-move.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
