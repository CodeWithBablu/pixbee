/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      colors: {
        primary: "#17171b",
        secondary: "#232323",
        navbar: "#0f0f11",
        sidebar: "#111315",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        headingColor: "#2e2e2e",
        textColor: "#515151",
        lightTextGray: "#9ca0ab",
        purple: "#D6D3FF",
        gray: "#E8E9ED",
        boagreen: "#B2FCE3"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dynapuff: ['DynaPuff', 'cursive'],
        fredoka: ['Fredoka', 'sans-serif'],
        righteous: ['Righteous', 'cursive'],
        prostone: ['Prosto One', 'cursive'],
        sono: ['Sono', 'sans-serif'],
        laila: ['Laila', 'sans-serif']
      },

      animation: {
        blob: "bolb 7s infinite",
      },

      keyframes: {
        bolb: {
          "0%": {
            transform: "scale(1) translate(0px,0px)",
          },
          "33%": {
            transform: "scale(1.15) translate(20px,-20px)",
          },
          "66%": {
            transform: "scale(0.9) translate(20px,20px)",
          },
          "100%": {
            transform: "scale(1) translate(0px,0px)",
          }
        }
      }
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      max: "1800px",
    },
  },
  plugins: [],
};