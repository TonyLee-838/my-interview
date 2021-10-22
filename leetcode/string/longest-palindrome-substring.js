const string1 = "abceecba";

const string2 = "abcecba";
const string3 = "bcecba";
const string4 = "bgaaaaabqbaaaaafdadads";

s = findLongestPalindromeSubstring(string4);

s;

function findLongestPalindromeSubstring(string) {
  let leftMostPointer = 0;
  let rightMostPointer = 0;

  for (let i = 0; i < string.length; i++) {
    const lenWithoutMiddle = expandFromMiddle(i, i);
    const lenWithMiddle = expandFromMiddle(i, i + 1);

    const localMaxLength = Math.max(lenWithMiddle, lenWithoutMiddle);

    if (rightMostPointer - leftMostPointer < localMaxLength) {
      rightMostPointer = (i + localMaxLength / 2) | 0;
      leftMostPointer = i - (((localMaxLength - 1) / 2) | 0);
    }
  }

  return string.slice(leftMostPointer, rightMostPointer + 1);

  function expandFromMiddle(left, right) {
    while (
      left >= 0 &&
      right <= string.length - 1 &&
      string.charAt(left) === string.charAt(right)
    ) {
      left--;
      right++;
    }

    return right - left - 1;
  }
}

// 13531
// 2 2
// 1 3
// 0 5
// -1 6

// function findLongestPalindromeSubstring(string) {
//   if (!string) return "";

//   let leftBoundary = 0;
//   let rightBoundary = 0;

//   for (let i = 0; i < string.length; i++) {
//     const lenWithMiddleCharacter = expandFromTheMiddle(string, i, i);
//     const lenWithoutMiddleCharacter = expandFromTheMiddle(string, i, i + 1);
//     const maxLen = Math.max(lenWithMiddleCharacter, lenWithoutMiddleCharacter);

//     if (maxLen > rightBoundary - leftBoundary) {
//       leftBoundary = i - Math.floor((maxLen - 1) / 2);
//       rightBoundary = i + Math.floor(maxLen / 2);
//     }
//   }

//   return string.slice(leftBoundary, rightBoundary + 1);
// }

// function expandFromTheMiddle(string, leftPointer, rightPointer) {
//   while (
//     leftPointer >= 0 &&
//     rightPointer < string.length &&
//     string.charAt(leftPointer) === string.charAt(rightPointer)
//   ) {
//     leftPointer--;
//     rightPointer++;
//   }

//   return rightPointer - leftPointer - 1;
// }
