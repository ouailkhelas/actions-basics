const { add, subtract, multiply, divide } = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds 10 + 20 to equal 30', () => {
  expect(add(10, 20)).toBe(30);
});

test('subtracts 10 - 3 to equal 7', () => {
  expect(subtract(10, 3)).toBe(7);
});

test('multiplies 5 * 4 to equal 20', () => {
  expect(multiply(5, 4)).toBe(20);
});

test('divides 20 / 4 to equal 5', () => {
  expect(divide(20, 4)).toBe(5);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});