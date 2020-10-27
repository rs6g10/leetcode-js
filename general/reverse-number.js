// Let's reverse a positive number without coverting it to a string
// What about tens and hundreds and thousands ... ? Leave them?

function reverseNumber(num) {
  if (num < 0) {
    return 0;
  }
  if (num < 10) {
    return num;
  }

  let reversed = 0,
    clonedNum = num;
  while (clonedNum > 0) {
    let lastDigit = clonedNum % 10;
    reversed = reversed * 10 + lastDigit;

    clonedNum = Math.trunc(clonedNum / 10); // Should I use bitwise operator to increase speed - but then bitwise won't work for max integer value
    // clonedNum =  (clonedNum/10) | 0
  }
  return reversed;
}
