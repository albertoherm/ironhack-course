module.exports = {
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.test.ts"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    extensionsToTreatAsEsm: [".ts"],
    globals: {
      "ts-jest": {
        useESM: true,
      },
    },
  };
  