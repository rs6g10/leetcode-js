/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort((a,b) => a-b);

  // Ensure that n is at the last index
  if (nums[nums.length-1] != nums.length) {
      return nums.length;
  } else if (nums[0] != 0) { // Ensure that 0 is at the first index
      return 0;
  }

  // If we get here, then the missing number is on the range (0, n)
  for (let i = 1; i < nums.length; i++) {
      let expectedNum = nums[i-1] + 1;
      if (nums[i] != expectedNum) {
          return expectedNum;
      }
  }

  // Array was not missing any numbers
  return -1;
};