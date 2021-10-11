function throttle(fn, delay) {
  let canRun = true;

  const context = this;

  return function (...args) {
    if (canRun) {
      fn.apply(context, args);
      canRun = false;
      setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };
}

function debounce(fn, delay) {
  let timer = null;

  const context = this;

  return function (...args) {
    if (timer) clearInterval(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function debounceFirstRun(fn, delay) {
  let timer = null;
  let firstRun = false;

  const context = this;

  return function (...args) {
    if (timer) clearInterval(timer);
    if (!firstRun) {
      fn.apply(context, args);
      firstRun = true;
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };
}
