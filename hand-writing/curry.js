/**
 * @param {Function} fn
 */
function makeCurry(fn, initialArgs = []) {
  return function _fn(...args) {
    const combinedArgs = [...initialArgs, ...args];

    fn.call(this, ...combinedArgs);
    return _fn;
  };
}

const f = makeCurry(function (...args) {
  return args.reduce((a, b) => {
    return a * b;
  }, 1);
});

function sum(...args1) {
  return function _fn(...args2) {
    const combinedArgs = [...args1, ...args2];
    _fn.toString = function () {
      return combinedArgs.reduce((a, b) => a + b, 0);
    };

    return _fn;
  };
}
