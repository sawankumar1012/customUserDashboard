module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 50: "#edf6ff", 100: "#c5dded", 900: "#175389" },
        white: { A700: "#ffffff" },
        indigo: { A200: "#727cf5" },
        teal: { 700: "#009a50" },
        black: { 900: "#100f0d", "900_7f": "#100f0d7f" },
        gray: { 50: "#fafafa", 100: "#f5f5f5", 300: "#dadada", 500: "#a6a6a6", "500_01": "#969696" },
        purple: { 50: "#f4eaff" },
        deep_orange: { 400: "#e57a44" },
      },
      boxShadow: {
        xs: "0px 10px 35px 0px #00000007",
        sm: "0px 4px 4px 0px #e6e6e63f",
        bs: "inset 0px -2px 1px 0px #727cf5",
      },
      fontFamily: { inter: "Inter" },
      opacity: { 0.7: 0.7, 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
