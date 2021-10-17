// [1,2,3,4] 10

//dp(10) = Math.min(dp(10-4),dp(10-3),dp(10-2),dp(10-1))+1
//dp(5) = Math.min(dp(5-4),dp(5-3),dp(5-2),dp(5-1))+1
//dp(0) = 0
//dp(-1) = Number.MAX_SAFE_VALUE
//[0,0,0,0,0]

function coinChange(coins, amount) {
  const result = run(coins, amount);

  return (result >= Number.MAX_SAFE_INTEGER && -1) || result;
}

function run(coins, amount, map = new Map()) {
  if (map.has(amount)) return map.get(amount);
  if (amount === 0) return 0;
  if (amount < 0) return Number.MAX_SAFE_INTEGER;

  let result = Number.MAX_SAFE_INTEGER;

  coins.forEach((coin) => {
    result = Math.min(result, run(coins, amount - coin) + 1);
  });

  map.set(amount, result);

  return result;
}

function coinChange(coins, amount) {
  const array = new Array(amount + 1).fill(null);

  array[0] = 0;

  for (let i = 0; i < amount; i++) {
    if (array[i] === null) continue;

    coins.forEach((coin) => {
      if (i + coin <= amount) {
        let target = array[i + coin];

        if (target !== null) array[i + coin] = Math.min(target, array[i] + 1);
        else array[i + coin] = array[i] + 1;
      }
    });
  }

  console.log(array);
  return array[amount] || -1;
}

//[0,0,0,0,0,0]
//[0,1,2,1,0,1]
//[0,1,2,2,1,1]
//[0,1,2,2,2,3]
//[0,1,2,2,2,4]

// console.log(coinChange([1, 2, 5], 11));

var change = function (amount, coins, map = new Map(),index = 0) {
  let key = `${amount},${index}`
  if (map.has(key)) return map.get(key);
  if (amount === 0) return 1;
  if (amount < 0 || (amount === 0 && !map.size)) return 0;

  let result = 0;

  coins.forEach((coin, i) => {
    result += change(amount - coin, coins.slice(i), map,i);
  });
  map.set(key, result);
  return result;
};
console.log(change(5, [1, 2, 5]));
