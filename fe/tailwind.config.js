// eslint-disable-next-line no-undef
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                warning: '#de5b00',
                primary: {
                    50: '#cbffff',
                    100: '#a4e8ff',
                    200: '#85cbf1',
                    300: '#32b1db',
                    400: '#409eca',
                    500: '#008ab7',
                    600: '#007ba5',
                    700: '#00668d',
                    800: '#005276',
                    900: '#003d5d',
                    DEFAULT: '#32b1db',
                },
            },
        },
    },
    plugins: [nextui()],
}
