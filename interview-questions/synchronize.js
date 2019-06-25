// 1. what gets printed to the console after invoking runAll?
// 2. write a function (synchronized) that takes a function as input.
// if the input is a synchronous function (e.g. fn), the function should
// return the result of invoking that function.
// if the input is an asynchronous function, synchronized should return a promise.
// if the function is called multiple times before that
// promise resolves, the function should return the promise
// produced when the function was first invoked.
// once the promise resolves the slate should be wiped clean.

const synchronized = function(func) {
  // declare a result variable in closure
  let result;
  return function() {
    // if result is a promise that has yet to resolve/reject;
    // return the promise
    if (result instanceof Promise) {
      return result;
    }

    // otherwise, invoke the function and store the result in result
    result = func();

    // check if invoking fn returns a promise and reset the result
    // variable in closure back to undefined when the promise settles
    // nb: The finally() method returns a Promise. When the promise is settled,
    // i.e either fulfilled or rejected, the specified callback function
    // is executed. This provides a way for code to be run whether
    // the promise was fulfilled successfully or rejected
    // once the Promise has been dealt with.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
    if (result instanceof Promise) {
      result.finally(() => {
        result = undefined;
      });
    }
    // handle the case where the input is a sync function
    return result;
  };
};

// /////////////////////////////////////////////////////////////////////////////

const startedAt = Date.now();
let i = 0;

const fn = function() {
  i += 1;
  console.log('>', Date.now() - startedAt, 'ms -', i);
  return i;
};

const promiseFn = function() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, 100);
  });
};

const syncFn = synchronized(fn);
const syncPromiseFn = synchronized(promiseFn);

const run = async function(func) {
  const [a, b] = await Promise.all([func(), func()]);
  console.log('a, b =', a, b);
};

const runAll = async function() {
  await run(fn);

  console.log('--');

  await run(promiseFn);

  console.log('--');

  await run(syncFn);

  console.log('--');

  await run(syncPromiseFn);
};

runAll();
