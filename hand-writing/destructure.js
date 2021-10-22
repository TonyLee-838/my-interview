function destructuringArray(array, string) {
  const parsed = JSON.parse(string.replace(/\w+/g, '"$&"'));
  const result = {};

  run(array, parsed);

  function run(array, parsedArray) {
    array.forEach((item, index) => {
      if (Array.isArray(item)) {
        run(item, parsedArray[index]);
      } else {
        const key = parsedArray[index];
        result[key] = item;
      }
    });
  }

  return result;
}

r = destructuringArray([1, [3, [2], [4]], 5], "[a,[b,[d],[e]],c]");
r;
