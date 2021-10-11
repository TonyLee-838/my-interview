function fib(length) {
  const arr = Array.from({ length }).fill(1);

  arr.forEach((_, i) => {
    if (i > 1) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  });

  return arr;
}

f = fib(10);

f;
