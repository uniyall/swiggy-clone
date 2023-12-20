/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mukta: ["Mukta", "sans-serif"]
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
