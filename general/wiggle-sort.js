/*
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
*/

function wiggleSort(arr) {
  /*
  Naive implementation
  arr.sort();  
  for(let i = 2; i < arr.length; i+=2) {
      let tmp = arr[i-1];
      arr[i-1] = arr[i];
      arr[i] = tmp;
  } 
  Naive Implementation ends
  */
  for(let i = 1; i < arr.length; i++){
    // If i is odd & current element in array is smaller than prev element in array then swap OR
    // if i is even & current element in array is bigger than prev element in array then swap
    if((i % 2 == 1 && arr[i] < arr[i-1]) || (i % 2 == 0 && arr[i] > arr[i-1])){
      // Swap
      let tmp = arr[i-1];
      arr[i-1] = arr[i];
      arr[i] = tmp;
    }
  }
  return arr;
}