const add = require('./stringCalculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself for single input', () => {
    expect(add("5")).toBe(5);
  });