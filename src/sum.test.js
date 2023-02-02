const sums = require('./sums');

test('adds 1 + 2 to equal 3', () => {
  expect(sums(1, 2)).toBe(3);
});
