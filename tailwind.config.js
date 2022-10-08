/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        blueBlack: " hsl(233, 26%, 24%)",
        lightBlue: " hsl(233, 8%, 62%)",
        LightGrayishBlue: " hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        BrightCyan: " hsl(192, 70%, 51%)",
      },
      fontFamily: { PublicSans: "Public Sans" },
    },
  },
  plugins: [],
};
