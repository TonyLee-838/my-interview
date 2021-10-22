function LazyMan(name) {
  console.log(name);

  return {
    priorityQueue: [],
    eat(thing) {
      setTimeout(() => {
        this._flushQueue();
        console.log("eat " + thing);
      }, 0);
      return this;
    },

    sleep(second) {
      setTimeout(() => {
        this._flushQueue();
        console.log("sleep " + second);
      }, second * 1000);

      return this;
    },

    sleepFirst(second) {
      this.priorityQueue.push(() => {
        setTimeout(() => {
          console.log("sleep first", second);
        }, second);
      });
    },

    _flushQueue() {
      this.priorityQueue.forEach((callback) => {
        callback();
        this.priorityQueue.shift();
      });
    },
  };
  //   this.eat = function (thing) {

  //   };

  //   this.sleep = function (second) {
  //

  //     return this;
  //   };
  // };
}
LazyMan("a").eat("thing").eat("thingB").sleepFirst(5);
