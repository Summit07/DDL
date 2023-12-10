// Checking sum Zero -- Problem 1  (array must be sorted) [-5,-4,-3,-2,0,2,4,6,8]
// [-8,-9,-5,-4,-3,-8,0,4,6,3,2,1]  first pair sum is zero
// [-8,-9,-5,-4,-3,-8,0,4,6,3,2,1]
//[-4,4]

function getSumPairZero(array) {
  // this is brute force method
  for (let digit of array) {
    console.log(`outer loop`);
    for (let j = 1; j < array.length; j++) {
      console.log(`inner loop`);
      if (digit + array[j] === 0) {
        return [digit, array[j]];
      }
    }
  }
}

function getSumPairBySubtract(array, n) {
  // this is inbuild method
  for (let i = 0; i < array.length; i++) {
    let num = array[i] - n;
    let aa = array.includes(num);
    console.log(aa);
  }
}
// const result = getSumPairBySubtract([9, -1, 4, -3, -8, 0, 4, 6, 3, 2, 1, 9], 0);
// console.log(result);

// O(n^2) quadratic time complexity
//other file for O(n) liner time complexity

function twoSum(array, target) {
  // this is inbuild method
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (obj[target - num] >= 0) {
      return [obj[target - num], i];
    } else {
      obj[num] = i;
      console.log(obj);
    }
  }
}
const result = twoSum([9, -1, 4, 3, -8, 0, 4, 6, -3, 2, 1, -9], 0);
console.log(result);
console.table();

// O(n^2) quadratic time complexity
//other file for O(n) liner time complexity
