module.exports = {
  "name": "cra-demo-1",
  "globals": {
    "__TEST__": true // Define a global test flag use in some specific cases
  },
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "cacheDirectory": "/tmp",
  "setupFiles": [
    "<rootDir>/.tests/Setup.js"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/"
  ],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleNameMapper": {
    "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
    "^[@./a-zA-Z0-9$_-]+\\.(png|gif)$": "RelativeImageStub",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/react/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "coverageReporters": [
    "lcov",
    "text",
    "text-summary"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,mjs}"
  ],
};
