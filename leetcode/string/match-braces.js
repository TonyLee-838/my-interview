function matchBraces(input) {
  const stack = [];

  const lookup = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
  };

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);

    if (lookup[char]) {
      stack.push(char);
    } else {
      const previousChar = stack.pop();
      if (char !== lookup[previousChar]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(matchBraces("(())"));
console.log(matchBraces("(({{}}))"));
console.log(matchBraces("(({))"));
console.log(matchBraces("((<{))"));
