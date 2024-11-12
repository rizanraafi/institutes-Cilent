/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files where Tailwind classes are used
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
