function addBigInt(numberA, numberB) {
  let pointerA = numberA.length - 1;
  let pointerB = numberB.length - 1;

  let sum = [];

  let carrier = 0;

  while (pointerA >= 0 && pointerB >= 0) {
    const numA = numberA.charAt(pointerA);
    const numB = numberB.charAt(pointerB);

    const localSum = +numA + +numB + carrier;

    const remain = localSum % 10;

    carrier = (localSum / 10) | 0;

    sum.unshift(remain);
    pointerA--;
    pointerB--;
  }
  while (pointerB >= 0) {
    const numB = numberB.charAt(pointerB);

    const localSum = +numB + +carrier;

    const remain = localSum % 10;

    carrier = (localSum / 10) | 0;

    sum.unshift(remain);
    pointerB--;
  }

  while (pointerA >= 0) {
    const numA = numberA.charAt(pointerA);

    const localSum = +numA + +carrier;

    const remain = localSum % 10;

    carrier = (localSum / 10) | 0;

    sum.unshift(remain);
    pointerA--;
  }

  return sum.join("") || "0";
}
const int1 = "10000000000000000000000000001";
const int2 = "121231243121231243121231243";

r = addBigInt(int1, int2);
r;
