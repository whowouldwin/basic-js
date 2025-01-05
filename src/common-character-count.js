const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const convertedStr1 = s1.split("");
  const convertedStr2 = s2.split("");
  let count = 0;
  for (const char of convertedStr1) {
    const index = convertedStr2.indexOf(char);
    if (index !== -1) {
      count = count + 1;
      convertedStr2.splice(index, 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
