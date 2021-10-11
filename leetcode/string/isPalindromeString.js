/**
 * @param {string} string
 */

const string = "aA345  r 543Aa";

const mapped = string.split("").reduce((result, char) => {
  if (char === " ") return result;

  result.push(char.toLocaleLowerCase());
  return result;
}, []);

let leftPointer = 0;
let rightPointer = mapped.length - 1;

while (leftPointer < rightPointer) {
  if (mapped[leftPointer] !== mapped[rightPointer]) return false;

  leftPointer += 1;
  rightPointer -= 1;
}

return true;

mapped;
