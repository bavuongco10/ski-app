const { isProdEnv } = require('./environment.util.js');

describe('Environment utils', () => {
  let beforeNE;
  beforeEach(() => {
    beforeNE = process.env.NODE_ENV;
  });
  afterEach(() => {
    process.env.NODE_ENV = beforeNE;
  });

  test('isNonProdEnv by default', () => {
    process.env.NODE_ENV = 'development';
    expect(isProdEnv()).toBe(false);
  });

  test('isProdEnv if NODE_ENV set to "production"', () => {
    process.env.NODE_ENV = 'production';
    expect(isProdEnv()).toBe(true);
  });
});
