/**
 * Unit tests for calculator.js
 *
 * Covers all four supported operations:
 *   - add      (Addition)
 *   - subtract (Subtraction)
 *   - multiply (Multiplication)
 *   - divide   (Division)
 *
 * Includes image-based examples and edge cases.
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds a positive and a negative number', () => expect(add(7, -3)).toBe(4));
  test('adding zero returns the same number', () => expect(add(42, 0)).toBe(42));
  test('adds decimal numbers', () => expect(add(1.5, 2.5)).toBe(4));
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts positive numbers', () => expect(subtract(20, 8)).toBe(12));
  test('subtracts resulting in a negative number', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts decimal numbers', () => expect(subtract(5.5, 2.5)).toBe(3));
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies a positive and a negative number', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplying by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplying by one returns the same number', () => expect(multiply(8, 1)).toBe(8));
  test('multiplies decimal numbers', () => expect(multiply(2.5, 4)).toBe(10));
});

// ─── Division ─────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides positive numbers', () => expect(divide(15, 3)).toBe(5));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBe(3.5));
  test('divides negative by positive', () => expect(divide(-12, 4)).toBe(-3));
  test('divides negative by negative', () => expect(divide(-10, -2)).toBe(5));
  test('dividing by one returns the same number', () => expect(divide(9, 1)).toBe(9));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});
