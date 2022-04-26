module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // 'airbnb-base',
    // '@vue/eslint-config-typescript/recommended',
    // '@vue/airbnb',
    // https://github.com/cypress-io/eslint-plugin-cypress
    // "plugin:cypress/recommended",
  ],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  // plugins: [
  //   '@typescript-eslint',
  // ],
  rules: {
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-unused-vars': ['off', { argsIgnorePattern: '^_' }],
    // "import/extensions": 0,
    // "import/no-extraneous-dependencies": [
    //   "error", {
    //     allow devDependencies for packages
    //     "devDependencies": true
    //   }
    // ]
    // "import/no-unresolved": 0,
    // "import/prefer-default-export": 0,
    // "indent": ["error", 2],
    // "no-alert": 0,
    'no-console': 'warn',
    'no-debugger': 'warn',
    // "no-param-reassign": 0,
    // 'no-undef': 'off',
    // "no-unused-vars": "warn",
    // 'quotes': [2, 'single'],
    // "spaced-comment": "off",
    // "vue/html-indent": ["error", 2],
    // 'vue/no-v-html': 0,
    // 'yoda': [2, 'always', {
    //   exceptRange: false,
    //   onlyEquality: true,
    // }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', 'src'],
        ],
        extensions: ['.vue', '.json', '.js', '.ts'],
      },
    },
  },
};
