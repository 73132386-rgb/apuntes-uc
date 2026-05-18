/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        uc: {
          navy:  "#0f2454",
          blue:  "#1e4080",
          gold:  "#f59e0b",
          light: "#f1f5f9",
        },
      },
      fontFamily: {
        sans: ["'Segoe UI'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};