/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc.json',
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/typescript',
    './modules/common.js',
    './modules/prettier.js',
    './modules/imports.js'
  ].map(require.resolve)
}

module.exports = config
