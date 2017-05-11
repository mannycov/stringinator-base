const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str, item => item === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str, item => item === target);
};

const isOnlyDigits = function(str) {
  // returns true for a string of only digits
  const strNums = parseInt(str);
  return _.every(strNums, item => !isNaN(item));
  return false;
};

// const isOnlyDigits = function(str) {
//   return ._every(parseInt(str), function(obj, item) {
//     if (!isNaN(obj[item]) {

//     }
//   }, {});
// }

const filterToOnlyDigits = function(str) {
  _.filter(str, item => !isNaN(item)).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  return truncateString(obj, item => item[key], maxLength);
};

const countChars = function(str) {
  return _.reduce(str, function(obj, item) {
    if (item in obj) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});
};

const dedup = function(str) {
  return _.uniq(str, item => item).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};