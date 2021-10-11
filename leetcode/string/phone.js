function letterCombinations(digits) {
  if (!digits) return [];

  const results = [];
  const lookup = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const queue = [""];

  while (queue.length) {
    const currentString = queue.pop();

    if (currentString.length === digits.length) {
      results.push(currentString);
      continue;
    }

    const processingDigit = digits.charAt(currentString.length);

    const chars = lookup[processingDigit];

    chars.forEach((char) => {
      queue.unshift(currentString + char);
    });
  }

  // letterCombinationsRecursive(0, "");

  // function letterCombinationsRecursive(charIndex, currentString) {
  //   if (charIndex === digits.length) {
  //     return results.push(currentString);
  //   }

  //   lookup[digits.charAt(charIndex)].forEach((char) => {
  //     letterCombinationsRecursive(charIndex + 1, currentString + char);
  //   });
  // }

  return results;
}

r = letterCombinations("325");
r;
