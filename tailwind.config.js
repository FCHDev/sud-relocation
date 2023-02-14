/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'orange-sud': '#d38327',
            'bleu-sud': '#1985A1',
            'gris-sud': '#7C6C77',
            'gris-sud-light': '#D9D3D7',
        },
        extend: {
            keyframes: {
                appear: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '100'},
                }
            },
          animation: {
            appear: 'appear 1s ease-in',
          }
        },
        fontFamily: {
            header: ['Poiret One', 'sans-serif'],
            bodyText: ['Raleway', 'sans-serif'],
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
