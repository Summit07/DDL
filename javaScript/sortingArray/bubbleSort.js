// Bubble Sort (Sorting)
// A sorting Algorithm where the largest values bubble up at the top
// www.toptal.com/developers/sorting , visualgo.net/en

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let isSwapped;
    for (let j = i - 1; j >= 0; j--) {
      console.log(arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // isSwapped = true;
      }
    }
    // if (!isSwapped) {
    //   break;
    // }
  }
  return arr;
}

const res = bubbleSort([5, 3, 4, 6, 2, 1, 8, 9, 5, 3, 7]);
// const res = bubbleSort([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9]);
console.log(bubbleSort([5, 3, 4, 6, 2, 1, 8, 9, 5, 3, 7]));

///linkedIN

let unSortArr = [4, -1, 34, 9, -9, 103];

const sortArr = (inputArr) => {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      let temp = inputArr[i];
      console.log(inputArr[i], inputArr[j]);
      if (inputArr[i] > inputArr[j]) {
        inputArr[i] = inputArr[j];
        inputArr[j] = temp;
      }
    }
  }
  return inputArr;
};

// console.log(sortArr([5, 3, 4, 6, 2, 1, 8, 9, 5, 3, 7]));

//Time Complexity best == O(n)     ---- worse == O(n^2)  -- average == O((n/2)*n) == O(n^2)
//Space Complexity == O(1)
//This is first one
