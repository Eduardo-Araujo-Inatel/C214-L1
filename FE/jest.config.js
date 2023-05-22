module.exports = {
    preset: 'ts-jest',
    testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    setupFilesAfterEnv: ["./src/__tests__/setupTests.ts"]
  };