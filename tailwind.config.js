module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        genimp: "url('/genshin.jpg')",
      },
      fontFamily: {
        custom: ["GenshinImpactFont", "sans-serif"],
      },
      colors: {
        dirty: "#fefae0",
      },
    },
  },
  plugins: [],
};
