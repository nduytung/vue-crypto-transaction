/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_blue: "#305ce8",
        dark_slate: "#292a48",
        light_slate: "#303052",
      },
    },
  },
  plugins: [],
};
