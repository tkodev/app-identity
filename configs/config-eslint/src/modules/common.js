const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc.json',
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    'eslint-config-turbo'
  ].map(require.resolve),
  globals: {
    React: true,
    JSX: true
  },
  parserOptions: {
    project
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  overrides: [
    {
      files: ['*.config.js', '*.config.ts', '*.config.mts'],
      env: {
        node: true
      }
    }
  ],
  ignorePatterns: ['.next/', 'dist/', 'public/', 'build/', 'out/', 'node_modules/'],
  rules: {
    'import/no-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': [2, 'type']
  }
}

module.exports = config
