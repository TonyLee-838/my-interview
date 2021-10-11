const string = "12332";

function findFirstNonRepeat(string) {
  const map = {};

  for (const char of string) {
    if (isNaN(map[char])) map[char] = 1;
    else map[char]++;
  }

  let result = "";
  Object.entries(map).forEach(([char, times]) => {
    if (times === 1 && !result) {
      result = char;
    }
  });

  return result;
}

res = findFirstNonRepeat(string);
res;
