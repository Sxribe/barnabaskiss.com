module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  }
}