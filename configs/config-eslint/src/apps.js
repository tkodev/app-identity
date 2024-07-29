/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc.json',
  plugins: ['@next/eslint-plugin-next'],
  extends: [
    '@vercel/style-guide/eslint/next',
    './modules/common.js',
    './modules/prettier.js',
    './modules/imports.js'
  ].map(require.resolve)
}

module.exports = config
