const string1 = "abceecba";

const string2 = "abcecba";
const string3 = "bcecba";
const string4 = "bgaaaaabqbaaaaafdadads";

s = findLongestPalindromeSubstring(string1);

s;

function findLongestPalindromeSubstring(string) {
  if (!string) return "";

  let leftBoundary = 0;
  let rightBoundary = 0;

  for (let i = 0; i < string.length; i++) {
    const lenWithMiddleCharacter = expandFromTheMiddle(string, i, i);
    const lenWithoutMiddleCharacter = expandFromTheMiddle(string, i, i + 1);
    const maxLen = Math.max(lenWithMiddleCharacter, lenWithoutMiddleCharacter);

    if (maxLen > rightBoundary - leftBoundary) {
      leftBoundary = i - Math.floor((maxLen - 1) / 2);
      rightBoundary = i + Math.floor(maxLen / 2);
    }
  }

  return string.slice(leftBoundary, rightBoundary + 1);
}

function expandFromTheMiddle(string, leftPointer, rightPointer) {
  while (
    leftPointer >= 0 &&
    rightPointer < string.length &&
    string.charAt(leftPointer) === string.charAt(rightPointer)
  ) {
    leftPointer--;
    rightPointer++;
  }

  return rightPointer - leftPointer - 1;
}
