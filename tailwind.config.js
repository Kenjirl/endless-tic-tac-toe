/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'quicksand': ['"Quicksand"', 'cursive'],
                'gloria-hallelujah': ['"Gloria Hallelujah"', 'cursive'],
                'indie-flower': ['"Indie Flower"', 'cursive'],
            },
        },
    },
    plugins: [],
}