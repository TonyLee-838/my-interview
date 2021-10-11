const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

findMaxArea(grid);
/**
 * @param {number[][]} grid
 */
function findMaxArea(grid) {
  const row = grid.length;
  const column = grid[0].length;
  let maxArea = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      maxArea = Math.max(maxArea, getArea(grid, i, j));
    }
  }
}

/**
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 */
function getArea(grid, i, j) {
  if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0) return 0;
  if (!grid[i][j]) return 0;

  grid[i][j] = 0;

  return (
    1 +
    getArea(grid, i + 1, j) +
    getArea(grid, i - 1, j) +
    getArea(grid, i, j + 1) +
    getArea(grid, i, j - 1)
  );
}
