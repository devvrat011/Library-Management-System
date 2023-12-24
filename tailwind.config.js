/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        translateY: {
          '0%': {
            transform: 'translateY(20%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        translateX: {
          '0%': {
            transform: 'translateX(-20%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        opacity: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
       
      },
    
      animation: {
        issue: 'wiggle 1s ease-in-out infinite, opacity 2s ease-in-out , translateY 1s ease-in-out',
        translate_fade:'translateX 1s ease-in-out ,opacity 2s ease-in-out',
        issue_finite:'wiggle 1s ease-in-out , opacity 2s ease-in-out , translateY 1s ease-in-out',
      },
    },
  },
  plugins: [],
}

