/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "navy-blue-1": "#26547C", // Example custom color
        "super-light-gray-1": "#f5f5f7",
      },
    },
  },
  plugins: [],
};
