module.exports = {
  plugins: {
    [require('node:path').join(process.cwd(), 'scripts/postcss-tailwind.cjs')]: {},
    autoprefixer: {},
  },
}
