/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      stellaNova: ["Stella Nova Black", "system-ui", "sans-serif"],
      stellaNovaBold: ["Stella Nova Medium", "system-ui", "sans-serif"],
      rubik: ["Rubik", "system-ui", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      letterSpacing: {
        wide: "1.52px",
        wider: "1.68px",
      },
      lineHeight: {
        heading: "28.16px",
        subHeading: "30.16px",
      },
      colors: {
        "light-bg": "#F6F1F1",
        "border-bg": "#E74646",
        "button-primary": "#146C94",
      },
    },
  },
  plugins: [],
};
