function newOperator(constructorFn, ...args) {
  const newObject = Object.create(constructorFn.prototype);
  const constructorReturn = constructorFn.apply(newObject, args);

  const isObjectOrFunction =
    typeof constructorReturn === "function" ||
    (typeof constructorReturn === "object" && constructorReturn !== null);

  return (isObjectOrFunction && constructorReturn) || newObject;
}

function Person(age) {
  this.name = "tony";
  this.age = age;
}
