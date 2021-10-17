function shallowCopy(target) {
  let result;

  if (typeof result !== "object") return target;
  if (Array.isArray(target)) result = [];

  if (Object.prototype.toString.call(this, target) === "[object Object]")
    result = {};

  Object.entries(target).forEach(([key, value]) => {
    console.log(key);
    result[key] = value;
  });

  Object.setPrototypeOf(result, Object.getPrototypeOf(target));

  return result;
}

function deepClone(target, memo = new WeakMap()) {
  // primitive type
  if (!target instanceof Object) return target;
  // Date
  if (target instanceof Date) return new Date(target);
  // RegExp
  if (target instanceof RegExp) return new RegExp(target.source, target.flags);

  //Function
  if (target instanceof Function)
    return function (...args) {
      return target.apply(this, args);
    };

  if (memo.has(target)) return memo.get(target);

  //Recursive Calls Needed:
  const clonedResult = new target.constructor();

  memo.set(target, clonedResult);
  //Set Map
  if (target instanceof Set) {
    target.forEach((item) => {
      clonedResult.add(deepClone(item));
    });
  }
  if (target instanceof Map) {
    target.forEach((value, key) => {
      clonedResult.add(deepClone(key), deepClone(value));
    });
  }
  //Arrays

  if (target instanceof Array) {
    target.forEach((value) => {
      clonedResult.push(deepClone(value));
    });
  }

  //Plain objects
  if (Object.prototype.toString.call(target) === "[object Object]") {
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        clonedResult[key] = deepClone(target[key]);
      }
    }
  }
}

const parent = { ppp: 1 };

const test = {
  x: { a: { q: 123 }, b: [1, 1, 1, 1] },
  y: 1,
};

// Object.setPrototypeOf(test, parent);

// console.log(test.x.a);

// console.log(test.x.a);

// const c1 = deepClone(test);

// console.log(c1.x.a);

// c1.x.a = null
