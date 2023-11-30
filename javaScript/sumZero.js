// Checking sum Zero -- Problem 1  (array must be sorted) [-5,-4,-3,-2,0,2,4,6,8]
// [-8,-9,-5,-4,-3,-8,0,4,6,3,2,1]  first pair sum is zero
// [-8,-9,-5,-4,-3,-8,0,4,6,3,2,1]
//[-4,4]

function getSumPairZero(array) {
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
const result = getSumPairZero([9, -1, 4, -3, -8, 0, 4, 6, 3, 2, 1, 9]);
console.log(result);

// O(n^2) quadratic time complexity
//other file for O(n) liner time complexity
