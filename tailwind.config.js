/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        ],
    theme: {
        extend: {
            fontFamily: {
                cadiz: ["Cadiz", "sans-serif"],
                tobias: [],
                maison: ['"Maison Neue Book"', 'sans-serif']
            },
            colors: {
                'neutral-primary': '#35383D',
                'neutral-primary-light': '#676A6D',
                'neutral-primary-lighter': '#9A9B9E',
                'neutral-secondary-dark': '#F3F2F2',
                'neutral-secondary-darker': '#E1DEDE',
                'neutral-tertiary': '#F7EEE8',
                'accent-primary': '#105368',
                'accent-primary-dark': '#0C3F4F',
                'positive-primary': '#BAC4B2',
                'positive-primary-dark': '#4E8046'
            },
        },
    },
    plugins: [
        ],
}