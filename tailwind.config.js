/** @type {import('tailwindcss').Config} */
// Add all theme specific elements like colors, screens, and fonts
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(29, 28, 28, 1)',
        secondary: 'rgba(243, 243, 243, 1)',
        tertiary: 'rgba(131, 130, 130, 1)',
        dark: 'rgba(0, 0, 0, 1)',
        white: '#fff',
        placeHolder: '#A4A2A2',
        lightDark: '#4A4A4A',
        'event-card': '#393D3F',
        'event-text': '#E2E1DC',
        'attendees-card': '#cfbab0',
      },
      fontFamily: {
        romieRegular: 'Romie-Regular',
        diaType: 'ABC Diatype',
      },
      screens: {
        xs: '420px',
        sm: '576px',
        md: '768px',
        lg: '1201px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
};
