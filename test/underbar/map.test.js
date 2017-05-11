const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every number in an array of numbers to their product given a factor to multiply in the callback', () => {
    const nums = [2, 3, 4];
    const mappedNums = _.map(nums, (item) => item * 3);
    expect(mappedNums).toEqual([6, 9, 12]);
  });

  it('maps property in an array-like object of values', () => {
    const obj = {
      pie: 'pumpkin',
    };
    const mappedObj = _.map(obj, (property) => obj.pie);
    expect(mappedObj).toEqual(['pumpkin']);
  });

});