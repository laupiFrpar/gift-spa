module.exports = {
  root: true,
  env: {
    // es6: true,
    // browser: true,
    node: true,
    // 'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    // '@vue/airbnb',
    // https://github.com/cypress-io/eslint-plugin-cypress
    // "plugin:cypress/recommended",
    // "plugin:@typescript-eslint/]recommended"
  ],
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   ecmaVersion: 9,
  //   sourceType: 'module',
  //   parser: 'babel-eslint',
  // },
  // plugins: [
  //   '@typescript-eslint',
  // ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 'warn',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "vue/html-indent": ["error", 2],
    // "indent": ["error", 2],
    // "no-alert": 0,
    // "no-unused-vars": "warn",
    // "spaced-comment": "off",
    // "no-param-reassign": 0,
    // "import/extensions": 0,
    // "import/no-unresolved": 0,
    // "import/prefer-default-export": 0,
    // "import/no-extraneous-dependencies": [
    //   "error", {
    //     allow devDependencies for packages
    //     "devDependencies": true
    //   }
    // ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
