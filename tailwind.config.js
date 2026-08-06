/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bgDark: '#0C0C0E',
        emeraldCustom: '#10B981',
        tealCustom: '#14B8A6',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textMuted: 'var(--text-muted)',
        cardBg: 'var(--card-bg)',
        cardHoverBg: 'var(--card-hover-bg)',
        borderColor: 'var(--border-color)',
        borderHover: 'var(--border-hover)',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
