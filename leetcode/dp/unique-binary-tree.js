// f(1) = 1
// f(2) = 2 =>
// f(3) = f(3 - 1) + 2 + f(3 - 2) + 1

//


var numTrees = function (n, map = new Map()) {
  if (map.has(n)) return map.get(n);
  if (n <= 1) return 1;
  let result = 0

  for (let root = 1; root <= n; root++) {
    const leftNum = root - 1
    const rightNum = n - root;

    result += numTrees(leftNum,map) * numTrees(rightNum,map)
  
  }

  map.set(n, result);

  return result;
};

console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(4));
