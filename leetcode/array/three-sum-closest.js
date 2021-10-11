/**
 * Given an integer array nums of length n and an integer target, 
 * find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.

 * You may assume that each input would have exactly one solution.
 */

/**
 *
 * @param {number[]} nums
 * @param {number} target
 */
function threeSumClosest(nums, target) {
  let minimumSum = nums[0] + nums[1] + nums[2];

  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let smallPointer = i + 1;
    let bigPointer = nums.length - 1;

    while (smallPointer < bigPointer) {
      let currentSum = sorted[i] + sorted[smallPointer] + sorted[bigPointer];

      if (currentSum > target) {
        bigPointer--;
      } else {
        smallPointer++;
      }

      minimumSum =
        Math.abs(currentSum - target) < Math.abs(minimumSum - target)
          ? currentSum
          : minimumSum;
    }
  }

  return minimumSum;
}
