//sorthing using Recursion
// [2,3,1,4] --> By Default case                 //postMortum of recursion
//[2,1,3,4]--> next step
// [1,2,3,4]--> sorting done

let arr = [2, 3, 9, 6, 7, 1, 4, 8, 6]; // do not give the repeted number boz swapping not give error
let myNewArr = [];
let i = 0;
let j = 1;

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortCheck(arr) {
  if (isSorted(arr)) {
    myNewArr = arr;
    return; // not return the array bxoz of undefined
  } else if (arr[i] < arr[j]) {
    i++;
    j++;
    sortCheck(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;
    sortCheck(arr);
  }
}
const result = sortCheck(arr);
console.log(myNewArr);
