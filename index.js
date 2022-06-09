function beautifulDays(i, j, k) {
  // Write your code here
  let count = 0;
  for (let num = i; num <= j; num++) {
    const reverseNum = (num) =>
      parseInt(num.toString().split("").reverse().join(""));
    if ((num - reverseNum(num)) % k === 0) {
      count++;
    }
  }
  return count;
}
