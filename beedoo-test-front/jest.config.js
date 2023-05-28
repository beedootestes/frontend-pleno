module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx'],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.js'],
}