const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns false for a non-array', () => {
    expect(_.isArrayLike(2, 2, 3)).toBe(false);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 10,
      shape: 'square'
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });
  
});
