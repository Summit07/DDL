// Checking sum Zero - problem 1 with liner solution
//[-5,-4,-3,-2,0,2,4,6,8] sorted array ,work only in sorted array
//[?,?]   don't compare when u get less than 0.

function findSumPair(array) {
  let left = 0; //indexing value hai
  let right = array.length - 1; //indexing position hai , not the digit value
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = findSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

//O(n) liner time complexity
