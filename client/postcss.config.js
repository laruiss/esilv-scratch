module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-apply': {},
    '@fullhuman/postcss-purgecss': {
      content: ['./**/*.html']
    }
  },
}
