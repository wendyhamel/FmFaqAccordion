/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        'white' : 'hsl(0, 0%, 100%)',
        'pink' : 'hsl(275, 100%, 97%)',
        'purple' : '#AD28EB',
        'purple-gray' : 'hsl(292, 16%, 49%)',
        'purple-dark' : 'hsl(292, 42%, 14%)',
      }
    },
  },
}

