/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43A090",
        secondary: "#5184F9",
        tertiary: "#FFBA00",
        white: "#f2f2f2",
        darkColor: "#333333",
      },
    },
    darMode: "class",
  },
  plugins: [],
};
