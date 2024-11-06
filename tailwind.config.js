/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('../public/header3.png')",
        "header-image2": "url('../public/estanteria-enlaces.png')",
        "button-bg": "url('../public/fondo_boton.png')",
        "fondo-footer": "url('../public/fondo_footer.jpg')",
      },
    },
    plugins: [],
  },
};