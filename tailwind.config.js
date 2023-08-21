/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        container: {
          center: true,
          padding: '2rem',
        },
        backgroundImage: {
          'children': "url('../assets/img/Rectangle 27.png')"
          
        },
      },
    },
    plugins: [],
  }
  