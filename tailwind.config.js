/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Inter"],
      },
      colors: {
        primaryOne: "#FF444A",
        primaryTwo: "#009444",
      },
    },
  },
  plugins: [require("daisyui")],
};
