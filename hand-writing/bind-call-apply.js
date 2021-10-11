Function.prototype.myBind = function (thisArg = globalThis, ...args) {
  const actualFunction = this;

  thisArgs.__functionToCall = actualFunction;

  return function (...args2) {
    thisArgs.__functionToCall(...args, ...args2);

    Reflect.deleteProperty(thisArg, "__functionToCall");
  };
};

Function.prototype.myCall = function (thisArg = globalThis, ...args) {
  const actualFunction = this;

  thisArg.__functionToCall = actualFunction;

  const returnValue = thisArg.__functionToCall(...args);

  Reflect.deleteProperty(thisArg, "__functionToCall");

  return returnValue;
};

Function.prototype.myApply = function (thisArg = globalThis, args) {
  const actualFunction = this;

  thisArg.__functionToCall = actualFunction;

  const returnValue = thisArg.__functionToCall(...args);

  Reflect.deleteProperty(thisArg, "__functionToCall");

  return returnValue;
};
