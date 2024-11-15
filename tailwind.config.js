module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],  // Make sure Tailwind purges unused styles
  theme: {
    extend: {
      colors: {
        customColor: '#f00',  // Example custom color
      },
    },
  },
  plugins: [],
}