const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
      process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
      process.env.NODE_ENV === 'production'
      ? purgecss({
        content: ['./views/**/*.hbs', './public/**/*.js'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }) : null,
    ]
  }