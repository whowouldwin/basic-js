const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i + 1 < arr.length) {
          i++;
        }
        break;
      case '--discard-prev':
        if (resultArray.length > 0 && arr[i - 1] === resultArray[resultArray.length - 1]) {
          resultArray.pop();
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length) {
          resultArray.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 1] === resultArray[resultArray.length - 1]) {
          resultArray.push(arr[i - 1]);
        }
        break;
      default:
        resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

module.exports = {
  transform
};
