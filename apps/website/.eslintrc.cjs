/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['tv-bug-nextjs'],
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
