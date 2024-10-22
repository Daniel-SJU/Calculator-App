/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(255, 0, 0, 0.4)' },  // Faint red border at start and end
          '50%': { borderColor: 'rgba(255, 0, 0, 1)' },           // Strong red border in the middle
        },
      },
      animation: {
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

