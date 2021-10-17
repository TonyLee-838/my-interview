function deleteAndEarn(nums) {
  const formatted = format(nums);

  const dp = new Array(formatted.length + 1).fill(0);
  dp[1] = formatted[0];

  for (let i = 2; i <= formatted.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + formatted[i - 1]);
  }

  return dp[formatted.length];
}

function format(nums) {
  nums.sort((a, b) => a - b);

  const result = new Array(nums[nums.length - 1] + 1).fill(0);
  nums.forEach((num) => {
    result[num] += num;
  });

  return result;
}
