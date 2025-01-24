module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  moduleFileExtensions: ['ts', 'js'],
};
