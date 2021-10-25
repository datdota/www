// @ts-check
const { name } = require(`./package.json`);

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  displayName: name,
  testRunner: "jest-circus/runner",
  coverageDirectory: `<rootDir>/.coverage/`,
  collectCoverage: true,
  collectCoverageFrom: [
    // include
    "<rootDir>/src/**/*.{ts,tsx,js,jsx}",
    // exclude
    "!**/*.spec.ts",
    `!**/__fixtures__/**/*`,
    `!**/__mocks__/**/*`,
    `!**/__stories__/**/*`,
    `!**/__tests__/**/*`,
    `!**/node_modules/**`
  ],
  passWithNoTests: true,
  testEnvironment: `node`,
  verbose: true
};
