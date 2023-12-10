//Selection Sort--> always consider your first element is minimum from all of the array then swap and further check
// [0,2,24,34,10,1,9,18]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
function selectionSortMax(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = i;
    // let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max]) {
        max = j;
        // arr[i] == arr[j];
        // arr[j] == temp;
      }
    }
    if (i !== max) {
      temp = arr[i];
      arr[i] = arr[max];
      arr[max] = temp;
    }
  }
  return arr;
}

const res = selectionSortMax([55, 0, 2, 24, 34, 10, 1, 9, 18]);
console.log(res);

//Time Complexity best == O(n^2)     ---- worse == O(n^2)  -- average == O((n/2)*n) == O(n^2)
//Space Complexity == O(1)
//This is second one
