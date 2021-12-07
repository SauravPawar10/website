module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      500: "500px",
    },
    colors: {
      yellow: {
        // light: '#f0b035',
        DEFAULT: '#f0b035',
        // dark: '#009eeb',
      },
      blue: {
        100: "#104a79"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
