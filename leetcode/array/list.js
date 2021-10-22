/**
 * @param {string} str
 */
function permutation(str) {
  const chars = str.split("");

  const results = [];

  helper();

  return results;

  function helper(result = "", char = "") {
    result += char;

    if (result.length === chars.length) {
      return results.push(result);
    }

    chars.forEach((char) => {
      if (!result.includes(char)) helper(result, char);
    });
  }
}

r = permutation("abc");
r;
