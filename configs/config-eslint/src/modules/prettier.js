/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc.json',
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 100,
        endOfLine: 'auto',
        tailwindConfig: '../../config-tailwind/src/tailwind.config.js'
      }
    ]
  }
}

module.exports = config
