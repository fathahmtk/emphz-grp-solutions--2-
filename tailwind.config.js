/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./layouts/**/*.html",
        "./content/**/*.md",
        "./assets/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                industrial: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                    950: '#042f2e',
                },
                'emphz-teal': {
                    DEFAULT: '#14B8A6',
                    dark: '#0D9488',
                    darker: '#0F766E',
                    deep: '#042F2E',
                    black: '#020C0B',
                },
                'emphz-amber': '#FFCA3B',
                'accent-gold': '#D9A33E',
                'surface': '#020C0B',
            },
            fontFamily: {
                display: ['Space Grotesk', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
