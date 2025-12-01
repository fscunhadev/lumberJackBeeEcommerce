module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lumber: {
          dark: '#0F1A04',
          honey: '#E6A000',
          wood: '#6D4A00',
          paper: '#F7F6F3',
        }
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      }
    }
  },
  plugins: []
}
