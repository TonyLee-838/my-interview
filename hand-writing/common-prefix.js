function findCommonPrefix(strings) {
  if (!strings.length) return "";

  const [least] = strings.sort((a, b) => a.length - b.length);

  let pointer = least.length - 1;
  let result = least;

  while (pointer >= 0) {
    let allMatch = true;
    for (const string of strings) {
      if (!string.startsWith(result)) {
        allMatch = false;
        break;
      }
    }

    if (allMatch) {
      return result;
    }

    pointer--;
    result = result.slice(0, pointer + 1);
  }

  return "";
}
console.log(findCommonPrefix(["flower", "flow", "fight"]));
