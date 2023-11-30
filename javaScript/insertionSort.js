// Insertion Sort --> Consider 2nd element, arr[1] se start hoga, not indexing arr[0]
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

const res = insertionSort([8, 2, 4, 1, 3]);
console.log(res);
