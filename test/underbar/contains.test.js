const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 7)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Rarity')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Applejack')).toBe(false);
  });

  it('returns true if the target value is among the values of the array', () => {
    const drinks = ['Lemonade', 'Beer', 'Wine', 'Coffee'];
    expect(_.contains(drinks, 'Beer')).toBe(true);
  });

  it('returns true if the target value is among the values of the object', () => {
    const beverages = {
      'beverage1': 'Water',
      'beverage2': 'Coffee',
      'beverage3':  {'Beer': 'Ale'}
    };
    expect(_.contains(beverages.beverage3, 'Ale')).toBe(true);
  });

});