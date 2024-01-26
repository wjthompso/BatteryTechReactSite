/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "navy-blue-1": "#26547C", // Example custom color
      },
    },
  },
  plugins: [],
};
