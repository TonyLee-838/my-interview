function find(string) {
  if (!string) return 0;

  let leftPointer = 0;
  let rightPointer = 1;

  while (rightPointer < string.length) {
    const subString = string.slice(leftPointer, rightPointer + 1);
    if (areAllUnique(subString)) {
      rightPointer++;
    } else {
      rightPointer++;
      leftPointer++;
    }
  }

  return rightPointer - leftPointer;
}

function areAllUnique(string) {
  const set = new Set(string.split(""));

  return set.size === string.length;
}

const string = "";

r = find(string);
r;
