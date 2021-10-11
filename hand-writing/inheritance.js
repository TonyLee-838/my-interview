function inherit(Child, Parent) {
  const proto = Object(Parent.prototype);

  proto.constructor = Child;

  Child.prototype = proto;
}
