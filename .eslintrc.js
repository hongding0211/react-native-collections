module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native'],
  rules: {
    'global-require': 0,
    'no-use-before-define': 0,
    'max-classes-per-file': [0, 1],
    '@typescript-eslint/no-use-before-define': [2],
    '@typescript-eslint/ban-types': 0,
    'react/default-props-match-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-no-bind': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react-native/no-single-element-style-arrays': 1, // 单个样式元素不建议使用数组，如 style={[{height: 10}]}
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/sort-comp': 0,
    'react/static-property-placement': 0,
    'prefer-const': [
      2,
      { destructuring: 'all', ignoreReadBeforeAssign: false },
    ],
    'no-unused-vars': 0,
    'no-shadow': 0,
    'sort-imports': 0,
    'brace-style': 0,
    'comma-dangle': 0,
    'comma-spacing': 0,
    'prefer-destructuring': 0,
    'no-dupe-class-members': 0,
    'prefer-promise-reject-errors': 0,
    'no-param-reassign': [2, { props: false }],
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/brace-style': [2],
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-dupe-class-members': [2],
    'react/destructuring-assignment': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-shadow': 0,
    'no-nested-ternary': 0,
    '@typescript-eslint/prefer-optional-chain': 0,
    'no-bitwise': 0,
    'no-template-curly-in-string': 0,
    '@typescript-eslint/no-empty-function': 0,
    'consistent-return': 0,
    'no-return-assign': 0,
    'default-case': 0,
    'no-void': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': 'off',
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 1,
    semi: 0,
    camelcase: 0,
    indent: 0,
    curly: 1,
    quotes: 1,
    'max-len': 0,
    'arrow-parens': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'prefer-template': 0,
    'nonblock-statement-body-position': 0,
    'function-paren-newline': 0,
    'react/function-component-definition': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-indent': 0,
    'react/jsx-closing-tag-location': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    // If you're using a module bundler other than Node or Webpack, you may end up with a lot of false positive reports of missing dependencies.
    'import/no-unresolved': 0,
    'no-spaced-func': 0,
    'func-call-spacing': 0,
    'object-curly-spacing': 1,
    'no-multiple-empty-lines': 1,
    'space-infix-ops': 1,
    'quote-props': 1,
    'react/jsx-no-useless-fragment': 1,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/comma-spacing': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    'no-continue': 0,
    'no-else-return': 0,
    'no-plusplus': 0,
  },
}
