const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the first 3 elements of an array', () => {
    expect(_.first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });
  
});