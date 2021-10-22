function parse(num) {
  let result = "";
  let isNegative = false;

  const [int, decimal] = `${num}`.split(".");
  if (decimal) {
    result += `.${decimal}`;
  }

  const splitted = int.split("");

  if (splitted[0] === "-") {
    isNegative = true;
    splitted.shift();
  }

  let pointer = splitted.length - 1;
  let localNum = "";
  while (pointer >= 0) {
    localNum = splitted[pointer] + localNum;

    if (localNum.length === 3) {
      result = "," + localNum + result;
      localNum = "";
    }

    pointer--;
  }

  if (localNum) {
    result = localNum + result;
  } else {
    result = result.slice(1);
  }

  if (isNegative) result = "-" + result;

  return result;
}

r = parse(-21412124210.123123);
r;
