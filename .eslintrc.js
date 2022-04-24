// rules
const prettierRules = {
  'prettier/prettier': [
    'error',
    {
      printWidth: 125,
      endOfLine: 'auto',
      semi: false,
      singleQuote: true,
      trailingComma: 'none'
    }
  ],
  semi: ['off'],
  quotes: ['off'],
  'comma-dangle': ['off']
}
const customRules = {
  'prefer-const': 'error'
}

// config
const config = {
  // imports
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['testing-library'],

  // context
  root: true,
  overrides: [
    {
      files: ['**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ],

  // linting
  rules: {
    ...prettierRules,
    ...customRules
  }
}

// export
module.exports = config
