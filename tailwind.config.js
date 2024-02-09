/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: { max: "1224px" },
        md:{max:'767px'},
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};

