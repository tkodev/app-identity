module.exports = {
  // paths
  roots: [
    '<rootDir>'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },

  // options
  testEnvironment: 'jsdom',
  clearMocks: true,

  // script to run after jest is loaded
  setupFilesAfterEnv: [
    'jest-extended',
    './jest.setup.js',
  ],
}
