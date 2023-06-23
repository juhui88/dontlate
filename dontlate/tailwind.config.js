//tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#02B0A6",
        bgColor: "#F1EFE8",
        textColor: "#4F4F4F",
        textAssisColor: "#929292",
        borderColor: "#EAEAEA",
      },
    },
  },
  plugins: [],
};
