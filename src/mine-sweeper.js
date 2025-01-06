const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const totalRows = matrix.length;
  const totalColumns = matrix[0].length;

  const minesweeperBoard = Array.from({ length: totalRows }, () => Array(totalColumns).fill(0));

  function countMines(currentRow, currentColumn) {
    let count = 0;
    for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
      for (let columnOffset = -1; columnOffset <= 1; columnOffset++) {
        const neighborRow = currentRow + rowOffset;
        const neighborColumn = currentColumn + columnOffset;

        if (neighborRow >= 0 &&
          neighborRow < totalRows &&

          neighborColumn >= 0 &&
          neighborColumn < totalColumns &&

          (rowOffset !== 0 || columnOffset !== 0) &&
          matrix[neighborRow][neighborColumn]) {

          count++;
        }

      }
    }
    return count;
  }

  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalColumns; j++) {
      minesweeperBoard[i][j] = countMines(i, j);
    }
  }

  return minesweeperBoard;
}

module.exports = {
  minesweeper
};
