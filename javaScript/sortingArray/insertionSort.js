// Insertion Sort --> Consider 2nd element, arr[1] se start hoga, not indexing arr[0]
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; //ahead value
    let j = i - 1; //behind value
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // ahead == behind
      j--;
    }
    console.log(current);
    arr[j + 1] = current;
  }
  return arr;
};

const res = insertionSort([8, 2, 4, 1, 3]);
console.log(res);

//Time Complexity best == O(n)     ---- worse == O(n^2)  -- average == O((n/2)*n) == O(n^2)
//Space Complexity == O(1)
//This is Third one
