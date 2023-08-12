/** @type {(overrideConfig: import('jest').Config) => Promise<import('jest').Config>} */
const createConfig = require('@tv-bug/jest/jest.nextjs.cjs');

module.exports = createConfig({
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
});
