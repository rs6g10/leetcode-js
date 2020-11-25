function reduce(array, callback, initialValue) {
  let accumulator = initialValue || 0;

  for(let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}