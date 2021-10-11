Array.prototype.myMap = function (executeFn, thisArg = this) {
  const originalArray = this;
  const length = originalArray.length;
  const mappedArray = Array.from({ length });

  for (let i = 0; i < length; i++) {
    const element = originalArray[i];

    const mappedElement = executeFn.call(thisArg, element, i, originalArray);

    mappedArray[i] = mappedElement;
  }

  return mappedArray;
};

Array.prototype.myForEach = function (executeFn, thisArg = this) {
  const originalArray = this;
  const length = originalArray.length;

  for (let k = 0; k < length; k++) {
    executeFn.call(thisArg, originalArray[k], k, originalArray);
  }
};

Array.prototype.myReduce = function (executeFn, initialValue, thisArg = this) {
  const originalArray = this;
  const length = originalArray.length;

  let accumulator = initialValue;

  for (let k = 0; k < length; k++) {
    const newValue = executeFn.call(
      thisArg,
      accumulator,
      originalArray[k],
      k,
      originalArray
    );

    accumulator = newValue;
  }

  return accumulator;
};

Array.prototype.myFilter = function (executeFn, thisArg = this) {
  const originalArray = this;
  const length = originalArray.length;

  const resultArray = new Array();

  for (let k = 0; k < length; k++) {
    const element = originalArray[k];

    const shouldPreserve = executeFn.call(thisArg, element, k, originalArray);

    if (shouldPreserve) {
      resultArray.push(element);
    }
  }

  return resultArray;
};

r = [1, 2, 3, 4, 5, 6].myFilter((v) => v % 2);
r;
