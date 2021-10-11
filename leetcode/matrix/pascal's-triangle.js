/**
 * @description
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 * 
 * Input: numRows = 5
 * Output: 
 * [
 * [1],
 * [1,1],
 * [1,2,1],
 * [1,3,3,1],
 * [1,4,6,4,1]
 * ]


 * @param {number} numRows 
 */

function generateTriangle(numRows) {
  if (!numRows) return [];

  const triangle = [];

  const initialRow = [1];

  triangle.push(initialRow);

  for (let i = 1; i < numRows; i++) {
    const previousRow = triangle[i - 1];

    const currentRow = [];

    //push 1 at the beginning and the end...
    currentRow.push(1);

    for (let j = 1; j < i; j++) {
      currentRow.push(previousRow[j - 1] + previousRow[j]);
    }

    currentRow.push(1);

    triangle.push(currentRow);
  }

  return triangle;
}

const triangle = generateTriangle(6);
console.log(triangle);
