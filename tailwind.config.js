tailwind.config = {
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1746F9',
        secondary: '#FFD900',
        three: '#1E2748',
        four: '#111629',
        dark: '#212121',
      },
      fontFamily: {
        raleway: ['Montserrat', 'sans-serif'],
        nunito: ['Playfair Display', 'serif'],
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
