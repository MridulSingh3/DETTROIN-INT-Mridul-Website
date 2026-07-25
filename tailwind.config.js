/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    800: '#0f172a',
                    900: '#0a192f',
                    950: '#020617',
                },
                gold: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                }
            }
        },
    },
    plugins: [],
}