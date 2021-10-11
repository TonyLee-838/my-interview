/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  if (!mat) return [];

  let row = mat.length;
  let column = mat[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (mat[i][j]) {
        let shortest = Number.MAX_VALUE;

        if (i + 1 < mat.length) shortest = Math.min(shortest, mat[i + 1][j]);
        if (i - 1 >= 0) shortest = Math.min(shortest, mat[i - 1][j]);

        if (j + 1 < mat[0].length) shortest = Math.min(shortest, mat[i][j + 1]);
        if (j - 1 >= 0) shortest = Math.min(shortest, mat[i][j - 1]);

        mat[i][j] = shortest + 1;
      }
    }
  }

  return mat;
};

const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

console.log(updateMatrix(mat));
