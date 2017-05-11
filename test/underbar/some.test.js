const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any item is a number', () => {
    const mixed = [true, 'string', 5, null];
    expect(_.some(mixed, item => !isNaN(item))).toBe(true);
  });

});