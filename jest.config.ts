export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Process `.tsx` files with `ts-jest`
    "^.+\\.svg$": "jest-transformer-svg", // Process `.svg` files with `jest-transformer-svg`
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS modules
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};