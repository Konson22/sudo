/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gold:'rgb(165, 140, 71)',
        gold2:'rgb(190, 161, 79)',
        darkblue:'rgb(30, 56, 91)',
        darkgray:'rgb(208, 209, 193)',
        lightgray:'rgb(221, 221, 209)',
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html, jsx, tsx, js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

