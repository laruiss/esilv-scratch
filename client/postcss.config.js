module.exports = {
  plugins: {
    'postcss-apply': {},
    '@fullhuman/postcss-purgecss': {
      content: ['./**/*.html']
    }
  },
}
