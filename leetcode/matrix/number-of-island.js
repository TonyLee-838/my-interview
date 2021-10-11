/**
 * @description
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
 * return the number of islands.

 * An island is surrounded by water and is formed by connecting adjacent lands horizontally 
  or vertically. You may assume all four edges of the grid are all surrounded by water.

  Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
  ]
  Output: 1

  Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
  ]
  Output: 3
 */
//Traverse the whole grid
//Breath First Search

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "0", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

/**
 * @param {string[][]} grid
 */
function solve(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;

        doDFS(grid, i, j);
      }
    }
  }

  /**
   *
   * @param {string[][]} grid
   * @param {number} i
   * @param {number} j
   */
  function doDFS(grid, i, j) {
    //Do boundary check (have different length!!!)
    if (i < 0 || i >= grid.length) return;
    if (j < 0 || j >= grid[i].length) return;

    //Condition to jump out of recursion

    if (grid[i][j] === "0") return;

    grid[i][j] = "0";

    doDFS(grid, i + 1, j); //up
    doDFS(grid, i - 1, j); //down
    doDFS(grid, i, j - 1); //left
    doDFS(grid, i, j + 1); //right
  }

  return count;
}

const result = solve(grid);
console.log(result);
