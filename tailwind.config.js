/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./layouts/**/*.html",
        "./content/**/*.md",
    ],
    theme: {
        extend: {
            colors: {
                // Premium Dark Theme - Enhanced
                'void': {
                    950: '#0A0E0D',
                    900: '#0F1514',
                    800: '#1A1F1E',
                },
                'slate': {
                    800: '#1E293B',
                    700: '#334155',
                    600: '#475569',
                    500: '#64748B',
                    400: '#94A3B8',
                    300: '#CBD5E1',
                },
                'teal': {
                    500: '#14B8A6',
                    400: '#2DD4BF',
                    300: '#5EEAD4',
                    200: '#99F6E4',
                },
                'cyan': {
                    400: '#22D3EE',
                    300: '#67E8F9',
                },
                'emerald': {
                    500: '#10B981',
                    400: '#34D399',
                    300: '#6EE7B7',
                },
                'amber': {
                    500: '#F59E0B',
                    400: '#FBBF24',
                },
                'rose': {
                    500: '#F43F5E',
                },
                // Legacy support
                'emphz-teal-black': '#0A0E0D',
                'emphz-teal-deep': '#1A1F1E',
                'emphz-teal': '#14B8A6',
                'emphz-amber': '#F59E0B',
                'industrial': {
                    900: '#0F1514',
                    800: '#1A1F1E',
                    700: '#374151',
                    600: '#4B5563',
                    500: '#6B7280',
                    400: '#9CA3AF',
                    300: '#D1D5DB',
                },
                'accent-blue': '#22D3EE',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Courier New', 'monospace'],
                display: ['Space Grotesk', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 70%), radial-gradient(at 80% 80%, rgba(52, 211, 153, 0.1) 0%, transparent 60%)',
            },
            boxShadow: {
                'glow-teal': '0 0 30px rgba(20, 184, 166, 0.3)',
                'glow-teal-lg': '0 0 60px rgba(20, 184, 166, 0.4)',
                'inner-glow': 'inset 0 0 40px rgba(20, 184, 166, 0.1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'slide-in': 'slideIn 0.6s ease-out forwards',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(20, 184, 166, 0.5)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
