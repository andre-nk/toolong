/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#388A90",
        "primary-alt": "#317A80",
        "secondary": "#DEA93E",
        "neutral-dark": "#1E1E1E",
        "neutral-grey": "#D9D9D9",
        "neutral-light": "#F6F1E8"
      },  
      fontFamily: {
        sans: ["Inter"],
        serif: ["GTSuper"],
      },
    },
  },
  plugins: [],
}

