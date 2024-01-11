/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-header": "#252F40",
        "first-h": "#414ED4",
        "second-h": "#003",
        "third-h": "#67748E",
        "back-third": "#EFF0FE",
        "fourth-h": "#6366F1",
        "fifth-h": "#6366F1",
        "gray-h": "#344054",
        "bar-2": "#A1A3F7",
        "bar-3": "#4285F4",
        "gradient-text":
          "linear-gradient(270deg, #6366F1 0.17%, #00C5E6 42.56%, #008AEE 90.12%)",
        "last-bg": "linear-gradient(180deg, #FFF 0%, #EFF0FE 100%)",
      },
    },
  },
  plugins: [],
};
