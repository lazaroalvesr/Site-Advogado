import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                'background-secondary': 'var(--background-secondary)',
                'background-accent': 'var(--background-tertiary)',
                'text-main': 'var(--color-text-main)',
                title: 'var(--color-title)',
                paragraph: 'var(--color-paragraph)',
                subTitle: 'var(--color-subTitle)',
            },
        },
    },
plugins: [],
} satisfies Config
