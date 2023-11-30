// Bubble Sort (Sorting)
// A sorting Algorithm where the largest values bubble up at the top
// www.toptal.com/developers/sorting , visualgo.net/en

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    console.log(i);
    let isSwapped;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

const res = bubbleSort([5, 3, 4, 6, 2, 1, 8, 9, 5, 3, 7]);
// const res = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(res);
