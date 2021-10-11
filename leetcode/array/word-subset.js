/**
 *
 * @param {string[]} strings
 * @param {string[]} subStrings
 */
function findWordSubset(strings, subStrings) {
  const lookup = get;
}

function getFrequencyTable(string) {
  const arr = Array.from({ length: 26 }).fill(0);

  for (const char of string) {
    arr[char.charCodeAt(0) - 97]++;
  }

  return arr;
}

words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
words2 = ["lo", "eo"];

res = findWordSubset(words1, words2);

res;

t = getFrequencyTable("aaa");
t;
