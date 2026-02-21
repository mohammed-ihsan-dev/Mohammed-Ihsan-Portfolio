/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Clash Display', 'Satoshi', 'sans-serif'],
            },
            colors: {
                primary: '#3B82F6',
                secondary: '#06B6D4',
                accent: '#8B5CF6',
                dark: {
                    DEFAULT: '#0A0F1C', // Deep blue-black
                    surface: '#111827', // Elevated surface
                },
                textPrimary: '#F8FAFC',
                textSecondary: '#94A3B8',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'blob': 'blob 20s infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
                'border-glow': 'border-glow 4s linear infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(40px, -60px) scale(1.1)' },
                    '66%': { transform: 'translate(-30px, 30px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    from: { backgroundPosition: '200% 0' },
                    to: { backgroundPosition: '-200% 0' },
                },
                'border-glow': {
                    '0%, 100%': { opacity: 0.5 },
                    '50%': { opacity: 1 },
                }
            }
        },
    },
    plugins: [],
}
