/**
 * Two SUM (sorted)
 * @param {number[]} numbers
 * @param {number} target
 */
function twoSum(numbers, target) {
  let smallPointer = 0;
  let gratePointer = numbers.length - 1;

  while (smallPointer <= gratePointer) {
    const sum = numbers[gratePointer] + numbers[smallPointer];

    if (sum < target) {
      smallPointer++;
    } else if (sum > target) {
      gratePointer--;
    } else {
      return [smallPointer, gratePointer];
    }
  }

  return [smallPointer, gratePointer];
}
