/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['tv-bug-esm'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
  },
};
