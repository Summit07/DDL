//Similar to Binary Search

const customInArray = (sortedArray, key) => {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (sortedArray[middle] === key) {
      return true;
    } else if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return false;
};

const findInArray = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    // if(arr[start] > arr[end]){
    //     let temp = arr[start]
    //     arr[start] == arr[end]
    //     arr[end] == temp
    // }
    if (arr[middle] == val) {
      return middle;
    } else if (arr[middle] < val) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
};

console.log(findInArray([1, 3, 5, 6, 9, 14, 29, 57, 89], 29));
