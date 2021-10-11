const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

r = rotate(matrix);
r;

function rotate(matrix) {
  return flipHorizontally(transpose(matrix));
}

function transpose(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = i; j < column; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  return matrix;
}

function flipHorizontally(matrix) {
  matrix.forEach((row, i) => {
    let leftPointer = 0;
    let rightPointer = row.length - 1;

    while (leftPointer < rightPointer) {
      const temp = matrix[i][leftPointer];
      matrix[i][leftPointer] = matrix[i][rightPointer];
      matrix[i][rightPointer] = temp;

      leftPointer++;
      rightPointer--;
    }
  });

  return matrix;
}
