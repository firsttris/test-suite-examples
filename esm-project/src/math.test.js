import { add, multiply } from './math.js';

describe('Math functions', () => {
  test('add should sum two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('multiply should multiply two numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });
});
