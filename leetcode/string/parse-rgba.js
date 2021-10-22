function parseRGBA(input) {
  const numbers = input.match(/\d{1,3}/g);

  const map = "0123456789ABCDEF";
  const result = numbers.reduce((result, number) => {
    const first = (number / 16) | 0;
    const second = number - first * 16;

    return result + map.charAt(first) + map.charAt(second);
  }, "");

  return "#" + result;
}

r = parseRGBA("rgba(25,255,255,255)");

r;

//
