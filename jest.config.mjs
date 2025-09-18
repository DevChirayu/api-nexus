// jest.config.mjs

import { defaults } from "jest-config";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  root: ["./src/tests"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  // testRegex: '(/__tests__/.*|\\.(test|spec))\\.ts?$',
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  // globals: {
  //     'ts-jest': {
  //         tsconfig: 'tsconfig.json', // Ensure this points to your tsconfig file if different
  //     },
  // },
  // testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore node_modules and dist folder
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: Add setup files if needed
  // coverageDirectory: '<rootDir>/coverage', // Optional: Where to output coverage results
  // collectCoverageFrom: ['src/**/*.{ts,tsx}'], // Optional: Specify which files to collect coverage from
};
