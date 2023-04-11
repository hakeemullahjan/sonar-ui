module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  // testEnvironment: 'node',
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
