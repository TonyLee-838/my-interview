const input = "五千四百二十亿六千四百二十三万五千四百零二";

function parse(input) {
  const splitted = input.split(/[万|亿]/g);

  const map = {
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    十: 10,
    百: 100,
    千: 1000,
  };

  let mul = 1;

  return splitted.reduceRight((result, string, index) => {
    const chars = string.split("");

    let memo = 0;

    const number = chars.reduceRight((result, char, index) => {
      const num = map[char];

      if (index === chars.length - 1 && num < 10) {
        result += num;
        return result;
      }

      if (!num) {
        result += memo;
        memo = 0;
        return result;
      }

      if (memo) {
        result += num * memo;

        memo = 0;
      } else {
        memo = num;
      }

      return result;
    }, 0);

    const _result = result + number * mul;

    mul *= 10000;
    return _result;
  }, 0);
}

const result = parse(input);

console.log(result);
