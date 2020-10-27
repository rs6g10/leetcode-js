// Binary search recursion
function binarySearchRecursion(arr, num, start, end) {
  if (start > end) {
    return false;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === num) {
    return true;
  }

  if (arr[mid] > num) {
    return binarySearchRecursion(arr, num, start, mid - 1);
  } else {
    return binarySearchRecursion(arr, num, mid + 1, end);
  }
}

// Binary search iterative
function binarySearchIterative(arr, num) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return true;
    }

    if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}
