// dependencies
const path = require('path');

// export
module.exports = {
  "root": true,
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended",
    // "plugin:prettier/recommended",
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  "rules": {
    "no-console": "off",
    "no-new": 0,
    "no-debugger": 0,
    "no-alert": 0,
    "no-await-in-loop": 0,
    "no-return-assign": [2, "except-parens"],
    "no-restricted-syntax": [2, "ForInStatement", "LabeledStatement", "WithStatement"],
    "no-unused-vars": [1, {"ignoreSiblings": true,
    "argsIgnorePattern": "res|next|^err"}],
    "prefer-const": [2, {"destructuring": "all"}],
    "arrow-parens": [2, "always"],
    "arrow-body-style": [2, "as-needed"],
    "no-unused-expressions": [2, {"allowTaggedTemplates": true}],
    "no-param-reassign": [2, {"props": false}],
    "no-console": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "radix": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "vue/script-indent": [2, 2, { "baseIndent": 1 }],
    "no-shadow": [2, {"hoist": "all", "allow": ["resolve", "reject", "done", "next", "err", "error"]}],
    "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    // "prettier/prettier": [2, {"trailingComma": "es5", "singleQuote": true, "printWidth": 80, "vueIndentScriptAndStyle": true, "arrowParens": "always"}],
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve(__dirname, "./frontend/webpack.config.js")
      }
    }
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
}
