console.log(backSpaceCompare("ab#c", "b#bc"));

function getFinalString(string) {
  let pointer = string.length - 1;
  let minusCount = 0;
  let result = "";

  while (pointer >= 0) {
    let char = string.charAt(pointer);
    while (char && char === "#") {
      minusCount++;
      pointer--;
      char = string.charAt(pointer);
    }

    pointer--;

    if (minusCount > 0) {
      minusCount--;
      continue;
    }

    result = char + result;
  }
}
/**
 * @param {string} stringA
 * @param {string} stringB
 */
function backSpaceCompare(stringA, stringB) {
  return getFinalString(stringA) === getFinalString(stringB);
}
