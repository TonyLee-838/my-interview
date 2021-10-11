function myInstanceOf(leftObject, constructorMethod) {
  if (
    typeof leftObject !== "object" ||
    leftObject === undefined ||
    leftObject === null
  )
    return false;

  let proto = Object.getPrototypeOf(leftObject);

  while (proto !== null) {
    if (proto === constructorMethod.prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
console.log(myInstanceOf([1, 2, 3], Function));
