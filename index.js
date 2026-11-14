
function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promises = [
  delayedPromise("Перший", 1000),
  delayedPromise("Другий", 2000),
  delayedPromise("Третій", 1500),
  delayedPromise("Четвертий", 3000),
  delayedPromise("П'ятий", 500)
];

Promise.all(promises)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
