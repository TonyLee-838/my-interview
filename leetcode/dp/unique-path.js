//f(1,1) => 1
//                    f(2,3)
//      f(1,3)                      f(2,2)
// f(0,3)   f(1,2)           f(1,2)         f(2,1)
//        f(0,2) f(1,1)   f(0,2)  f(1,1)  f(1,1) f(2,0)

function uniquePaths(m, n, map = new Map()) {
  let key = `${m},${n}`;
  if (map.has(key)) return map.get(key);
  if (m === 0 || n === 0) return null;

  if (m === 1 && n === 1) return 1;

  const result = uniquePaths(m - 1, n, map) + uniquePaths(m, n - 1, map);

  map.set(key, result);

  return result;
}

function uniquePaths(m, n){
  if(m <= 1 || n <= 1) return 1;
  const array = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
  array[1][1] = 1;

  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      const element = array[i][j];

      if(i + 1 <= m) array[i + 1][j] += element
      if(j + 1 <= n) array[i][j + 1] += element
    }
    
  }
  return array[m][n]
}

console.log(uniquePaths(1, 1));
console.log(uniquePaths(1, 2));
console.log(uniquePaths(2, 2));
console.log(uniquePaths(3, 3));
console.log(uniquePaths(7, 3));
