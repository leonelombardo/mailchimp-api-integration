/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["sans-serif", "system-ui"],
        "serif": ["Lora", "Georgia", "Times", "Times New Roman", "serif"]
      },
      colors: {
        primary: {
          500: "#ffe01b"
        },
        secondary: {
          500: "#1a1a1a",
          300: "#2a2a2a",
          100: "#4a4a4a"
        }
      }
    },
  },
  plugins: [],
}