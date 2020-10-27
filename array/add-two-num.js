/*
* You are given two non-empty linked lists representing two non-negative integers.
* The digits are stored in reverse order, and each of their nodes contains a single digit.
*
* Add the two numbers and return the sum as an array.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*
* Eg:
* Input: l1 = [2,4,3], l2 = [5,6,4]
* Output: [7,0,8]
* Explanation: 342 + 465 = 807.
*
* Input: l1 = [0], l2 = [0]
* Output: [0]
*
* Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
* Output: [8,9,9,9,0,0,0,1]
* */

function addTwoNum(l1, l2) {
  const length = l1.length > l2.length ? l1.length: l2.length;

  let carry = 0;
  const result = [];

  for(let i = 0; i < length; i++) {
    let sum = carry + (l1[i] ? l1[i] : 0) + (l2[i] ? l2[i] : 0);
    carry = 0;
    if(sum >= 10) {
      carry = ~~(sum / 10);
      result.push(sum%10);
    } else {
      result.push(sum);
    }
  }
  if (carry > 0) {
    result.push(carry);
  }

  return result;
}