//Helper recursive function, only inside function run  to get result
//[1,2,3,4,5,6,7,8,9,10]
//[1,3,5,7,9]  ----> output
// numbrt %2 !== 0

function findOdd(arr) {
  let result = [];
  function helperRecursive(inputArr) {
    if (inputArr.length === 0) {
      return;
    } else if (inputArr[0] % 2 !== 0) {
      result.push(inputArr[0]);
    }
    helperRecursive(inputArr.slice(1)); //recursivelly call
  }
  helperRecursive(arr); // one time call
  return result;
}

const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);
