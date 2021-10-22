function print(n) {
  const result = new Array(n).fill(0);

  const last = result.length - 1;

  let maxPointer = last;
  result[last] = 1;

  while (maxPointer >= 0) {
    while (result[last] < 10) {
      console.log(result.slice(maxPointer).join(""));
      result[last]++;
    }

    let currentPointer = last;

    while (currentPointer >= maxPointer && result[currentPointer] === 10) {
      result[currentPointer] = 0;

      result[currentPointer - 1]++;

      if (currentPointer === maxPointer) {
        maxPointer--;
        break;
      }

      currentPointer--;
    }
  }
}

print(2);
