/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkgreen:'rgb(41, 126, 133)',
        darkgreen2:'rgb(4, 84, 91)',
        mydark3:'rgb(50, 50, 50)',
        gold:'rgb(181, 140, 48)',
        darkblue:'rgb(48, 47, 78)',
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

