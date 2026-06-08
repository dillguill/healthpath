/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // All backed by CSS variables so they auto-switch on theme change
        sidebar:  'rgb(var(--c-bg)   / <alpha-value>)',
        panel:    'rgb(var(--c-panel) / <alpha-value>)',
        surface:  'rgb(var(--c-surface) / <alpha-value>)',
        border:   'rgb(var(--c-border) / <alpha-value>)',
        deep:     'rgb(var(--c-deep)  / <alpha-value>)',
        content:  'rgb(var(--c-content) / <alpha-value>)',
        card:     'rgb(var(--c-card)  / <alpha-value>)',
        foreground: 'rgb(var(--c-text) / <alpha-value>)',
        muted:    'rgb(var(--c-muted) / <alpha-value>)',
        faint:    'rgb(var(--c-faint) / <alpha-value>)',
        // Static brand / semantic colors
        accent:        '#5A8A6A',
        'accent-hover':'#4A7A5A',
        danger:        '#EF4444',
        warning:       '#F59E0B',
        success:       '#10B981',
      },
      fontFamily: {
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
