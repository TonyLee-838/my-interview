const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
    e: [1, 3, { a: 2, b: 3 }],
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

function flatten(target, result = {}, currentKey = "") {
  if (typeof target === "number") {
    result[currentKey] = target;
    return;
  }

  if (Array.isArray(target)) {
    target.forEach((val, index) => {
      flatten(val, result, currentKey + `[${index}]`);
    });

    return;
  }

  if (typeof target === "object") {
    Object.entries(target).forEach(([key, value]) => {
      const newKey = currentKey ? `${currentKey}.${key}` : key;

      flatten(value, result, newKey);
    });
  }

  return result;
}

// function flatten(object, result = {}, parentKey = "", isArray = false) {
//   if (typeof object === "number") {
//     result[parentKey] = object;
//     return;
//   }

//   Object.entries(object).forEach(([key, value]) => {
//     let currentKey = !isArray ? `${parentKey}.${key}` : parentKey;
//     if (!parentKey) currentKey = key;

//     //Number
//     if (typeof value === "number") {
//       result[currentKey] = value;
//       return;
//     }

//     //Array
//     if (Array.isArray(value)) {
//       value.forEach((val, index) => {
//         flatten(val, result, currentKey + `[${index}]`, true);
//       });

//       return;
//     }

//     //Object
//     if (typeof value === "object") {
//       flatten(value, result, currentKey);
//     }
//   });

//   return result;
// }

r = flatten(obj);
console.log(r);
