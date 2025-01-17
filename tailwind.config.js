module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        genimp: "url('/genshin2.jpg')",
      },
      fontFamily: {
        custom: ["GenshinImpactFont", "sans-serif"],
      },
      colors: {
        dirty: "#E63946",
      },
    },
  },
  plugins: [],
};
