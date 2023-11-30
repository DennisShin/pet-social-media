/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      fontFamily: {
        sans: ["UbuntuBold", "system-ui"]
      },
      extend: {
        fontFamily: {
          pacifico: ["Pacifico", "system-ui"]
        },
    colors:{
      'beige': '#DEB887',
      'goldenrod' : '#DAA520',
      'darkbrown' : '#78350f',
      'darkestbrown' : "#451a03",
      'whiteish' : "#FAEBD7",
      "almond": "#FFEBCD",
      "slate" : "#4A5553",
      "red": "b91c1c"

    },
    extend: {},
  },
  plugins: [],
}
}
