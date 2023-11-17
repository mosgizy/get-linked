/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#150E28'
        },
        secondary: {
          100: '#D434FE',
          200: '#903AFF',
          300: '#00A3FF'
        },
        modal: 'rgba(21, 14, 40, 0.93)',
        line: 'rgba(255, 255, 255, 0.18)'
      },
      fontFamily: {
        monteserrat: ['Montserrat'],
        unica: ['Unica One'],
        clash: ['Clash Display', 'sans-serif']
      },
      fontSize: {
        'lg-base': '2rem',
        '7xl': '0.8125rem'
      },
      backgroundImage: {
        bgGradient: 'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)',
        flare: 'url("/images/purple-flare.png")'
      },
      boxShadow: {
        input: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
}
