function find(string) {
  if (!string) return 0;

  let leftPointer = 0;
  let rightPointer = 1;
  let result = "";

  while (rightPointer < string.length) {
    const subString = string.slice(leftPointer, rightPointer + 1);
    if (areAllUnique(subString)) {
      rightPointer++;
      result = subString;
    } else {
      rightPointer++;
      leftPointer++;
    }
  }

  return result;
}

function areAllUnique(string) {
  const set = new Set(string.split(""));

  return set.size === string.length;
}

const string = "1234ddawfcbo";

r = find(string);
r;
