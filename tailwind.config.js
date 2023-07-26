module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './slices/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      'dm-sans': ['DM Sans', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
