class MessageCenter {
  constructor() {
    this.callbacks = {};
  }

  emit(type, data) {
    if (!this.callbacks[type]) return;

    this.callbacks[type].forEach((callback) => {
      callback(data);
    });
  }

  on(type, callback) {
    if (!this.callbacks[type]) this.callbacks[type] = [callback];
    else this.callbacks[type].push(callback);
  }

  off(type, callback) {
    if (!this.callbacks[type]) return;

    this.callbacks[type] = this.callbacks[type].filter((c) => c !== callback);

    if (this.callbacks[type].length === 0) delete this.callbacks[type];
  }
}

const messageCenter = new MessageCenter();

const cb = (data) => {
  console.log(data);
  console.log(data);
};

messageCenter.on("click", (data) => {
  console.log(data + Date.now());
});
messageCenter.on("click", cb);

messageCenter.emit("click", 123);

messageCenter.off("click", cb);
messageCenter.emit("click", 456);
messageCenter.emit("click", 456);
