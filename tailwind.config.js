module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
  },

  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};

// purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
