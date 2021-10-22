class Singleton {
  constructor() {}
}

const createMySingleObject = (function () {
  let internal;

  function create() {
    return { x: 1 };
  }

  return function () {
    if (!internal) {
      internal = create();
    }

    return internal;
  };
})();
const object1 = createMySingleObject();
object1.y = 1;
const object2 = createMySingleObject();

object1;
object2;

console.log("Im happy!!!  fdaf dfa fds".replace(/ /g, "%20"));
