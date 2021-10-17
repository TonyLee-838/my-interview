//f(1) = 1
//f(2) = 1
//f(3) = 2

//f(4) = Math.max(f(4 - 2)*f(2),f(4 - 3)*f(3))
//f(10) = Math.max(f(10 - 2)*f(2), f(10 - 3)*f(3))

//- => 0
//-|- => 1
//-|-- -|-|- => 3

function cut(n, memo = new Map()) {
  if (memo.has(n)) return memo.get(n);

  if (n <= 1) return 0;
  if (n === 2) return 1;
  if (n === 3) return 3;

  let result = 0;
  for (let i = 1; i < n; i++) {
    result = Math.max(result, cut(i, memo) * cut(n - i, memo));
  }

  memo.set(n, result);

  return result;
}

console.log(cut(1));
console.log(cut(2));
console.log(cut(3));
console.log(cut(5));
console.log(cut(6));
console.log(cut(120));
// console.log(cut(10));
