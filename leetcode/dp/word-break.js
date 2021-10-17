var wordBreak = function (s, wordDict, map = new Map()) {
  if (map.has(s)) return map.get(s);
  if (!s) return true;

  let result = false;
  wordDict.forEach((word) => {
    if (s.startsWith(word)) {
      const subString = s.slice(word.length);
      if (!result) result = wordBreak(subString, wordDict);
    }
  });

  map.set(s, result);

  return result;
};

/**
 * wordBreak("",[...]) // true
 */
