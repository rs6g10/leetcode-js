function shuffleArray(array) {
  let currentIdx = array.length;
  let tempVal, tempIdx;

  while(currentIdx !== 0) {
    tempIdx = Math.floor(Math.random() * currentIdx);

    currentIdx -= 1;

    tempVal = array[currentIdx];
    array[currentIdx] = array[tempIdx];
    array[tempIdx] = tempVal;
  }

  return array;
}