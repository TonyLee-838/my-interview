function convertObjectKey(object) {
  const result = {};

  Object.entries(object).forEach(([key, value]) => {
    const words = key.split("_");
    const convertedKey = words.map((word, index) => {
      if (index === 0) return word;

      word = word[0].toUpperCase() + word.slice(1);

      return word;
    });

    result[convertedKey.join("")] = value;
  });

  return result;
}

r = convertObjectKey({
  fd_dad_tew: 1,
  fd_dad_tedafw: 1,
  fd: 3,
});

r;
