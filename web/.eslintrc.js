module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  globals: {
    React: 'readonly',
  },
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
      },
    },
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      { args: 'after-used', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-curly-spacing': [2, { 'when': 'always', 'children': true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    "no-restricted-imports": ["error", {
      "patterns": [".*"]
    }],
    "react/prefer-stateless-function": "error",
    "react/jsx-no-script-url": "error",
    "react/function-component-definition": ["warn", { "namedComponents": "arrow-function" }],
    "react/jsx-key": "off",
    "react/no-typos": "warn",
    "react/display-name": "warn",
    "react/self-closing-comp": "warn",
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
};
