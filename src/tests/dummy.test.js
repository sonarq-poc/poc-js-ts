const sums = require('../sums');

test('adds 3 + 2 to equal 5', () => {
  expect(sums(3, 2)).toBe(5);
});