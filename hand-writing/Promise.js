//constructor => executor
//resolve/reject => can only change pending promise
//then

const STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

class MyPromise {
  constructor(executor) {
    this.status = STATUS.PENDING;

    this.value = null;
    this.reason = null;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    this.resolve = (value) => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.FULFILLED;
        this.value = value;

        //Flush callbacks
        while (this.onFulfilledCallbacks.length) {
          const callback = this.onFulfilledCallbacks.shift();
          callback(this.value);
        }
      }
    };

    this.reject = (reason) => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.REJECTED;
        this.reason = reason;

        while (this.onRejectedCallbacks.length) {
          const callback = this.onRejectedCallbacks.shift();
          callback(this.reason);
        }
      }
    };
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const promiseToReturn = new MyPromise((resolve, reject) => {
      switch (this.status) {
        case STATUS.FULFILLED:
          queueMicrotask(() => {
            try {
              const nextPromiseParam = onFulfilled(this.value);

              if (promiseToReturn === nextPromiseParam)
                return reject(new Error("Chain"));

              if (nextPromiseParam instanceof MyPromise) {
                nextPromiseParam.then(resolve, reject);
              } else {
                resolve(nextPromiseParam);
              }
            } catch (error) {
              reject(error);
            }
          });
          break;
        case STATUS.REJECTED:
          queueMicrotask(() => {
            try {
              const nextPromiseParam = onRejected(this.reason);

              if (promiseToReturn === nextPromiseParam)
                return reject(new Error("Chain"));

              if (nextPromiseParam instanceof MyPromise) {
                nextPromiseParam.then(resolve, reject);
              } else {
                resolve(nextPromiseParam);
              }
            } catch (error) {
              reject(error);
            }
          });
          break;
        case STATUS.PENDING:
          this.onFulfilledCallbacks.push(() => {
            queueMicrotask(() => {
              try {
                const nextPromiseParam = onFulfilled(this.value);

                if (promiseToReturn === nextPromiseParam)
                  return reject(new Error("Chain"));

                if (nextPromiseParam instanceof MyPromise) {
                  nextPromiseParam.then(resolve, reject);
                } else {
                  resolve(nextPromiseParam);
                }
              } catch (error) {
                reject(error);
              }
            });
          });
          this.onRejectedCallbacks.push(() => {
            queueMicrotask(() => {
              try {
                const nextPromiseParam = onRejected(this.reason);

                if (promiseToReturn === nextPromiseParam)
                  return reject(new Error("Chain"));

                if (nextPromiseParam instanceof MyPromise) {
                  nextPromiseParam.then(resolve, reject);
                } else {
                  resolve(nextPromiseParam);
                }
              } catch (error) {
                reject(error);
              }
            });
          });
          break;
      }
    });

    return promiseToReturn;
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
}).then((value) => {
  console.log("then", value);

  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 1000);
  });
});
