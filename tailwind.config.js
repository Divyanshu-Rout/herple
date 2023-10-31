/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        railway: ["Raleway", "sans-serif"],
      },
      colors: {
        "green-1": "#758467",
        "green-2": "#819171",
        "green-3": "#9CAF88",
        "green-4": "#CBD5C0",
        "green-5": "#DFE6DA",
      },
    },
  },
  plugins: [],
};
