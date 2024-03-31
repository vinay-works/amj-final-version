/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        seaShell: '#F1F1F1',
        black: '#000000',
        codGray: '#1B1B1B',
        matteBlack: '#161616',
        grainBrown: '#E2D0B0',
        sharkBlack: '#232325',
        canaryYellow: '#E0FD60',
        gray: '#8F8F8F',
        lightGray: '#8F8F8F',
        lightBorder: '#00000013',

        // Some Colorful Touches Palette...
        pattensBlue: '#D7E7FE',
        bananaMania: '#FBE6B1',
        links: '#eb560c',
        harpGreen: '#DFEEE9',
        goldenRod: '#FDD662',
        wistful: '#A1ADD3',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        modernGallery: ['Modern Gallery', 'sans-serif'],
      },
      backgroundImage: {
        'hero-img': "url('./src/assets/images/company.jpg')",
      },
      animation: {
        'scale-link': 'link-expand 0.25s ease',
      },
      keyframes: {
        'link-expand': {
          '0%': {
            transform: 'scale(1)',
            transformOrigin: 'left',
          },
          '100%': {
            transform: 'scale(1)',
            transformOrigin: 'right',
          },
        },
      },
    },
  },
  plugins: [],
};
