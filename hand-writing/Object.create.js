function myObjectDotCreate(prototype) {
  function Dummy() {}

  Dummy.prototype = prototype;

  return new Dummy();
}

o = Object.create({ x: 3 });
console.log(Object.getPrototypeOf(o));

console.log(o.x);
