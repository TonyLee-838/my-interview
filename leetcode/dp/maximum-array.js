function getMax(n,map = {}) {
  if(map[n]) return map[n]
  if (n <= 1) return n;

  let result;

  if (n % 2 === 1) {
    result = getMax(Math.floor(n / 2),map) + getMax(Math.ceil(n / 2),map);
  } else {
    result = getMax(n / 2,map);
  }

  map[n] = result

  return result;
}

console.log(getMax(0));
console.log(getMax(1));
console.log(getMax(2));
console.log(getMax(3));
console.log(getMax(4));
console.log(getMax(5));
console.log(getMax(6));
console.log(getMax(7));
