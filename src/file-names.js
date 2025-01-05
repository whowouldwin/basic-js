const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesObj = {};
  const result = [];

  for (const name of names) {
    if (namesObj[name] === undefined) {
      namesObj[name] = 0;
      result.push(name);
    } else {
      let newFileName = `${name}(${++namesObj[name]})`;

      while (namesObj[newFileName] !== undefined) {
        ++namesObj[name];
        newFileName = `${name}(${++namesObj[name]})`;
      }

      namesObj[newFileName] = 0;
      result.push(newFileName);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
