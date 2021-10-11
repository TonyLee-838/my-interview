function generateSpiralMatrix(n) {
  const matrix = Array.from({ length: n }, () => []);

  let rowBegin = 0;
  let rowEnd = n - 1;
  let columnBegin = 0;
  let columnEnd = n - 1;

  let counter = 1;

  while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
    for (let i = columnBegin; i <= columnEnd; i++) {
      matrix[rowBegin][i] = counter++;
    }

    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      matrix[i][columnEnd] = counter++;
    }
    columnEnd--;

    for (let i = columnEnd; i >= columnBegin; i--) {
      matrix[rowEnd][i] = counter++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowBegin; i--) {
      matrix[i][columnBegin] = counter++;
    }
    columnBegin++;
  }

  return matrix;
}

matrix = generateSpiralMatrix(6);
matrix;
