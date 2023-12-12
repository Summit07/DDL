let arr = [1, 2, 3, 4, 5, 6, 5, 4, 7]; //[7,4,5,6]
function rotateArray(arr, k) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }

  const rotated = arr.splice(size - k, size); //(p,d,f) == p=== size-k  d=== size
  //O(n) + O(n)
  arr.unshift(...rotated);
  console.log(arr);
  return arr;
}

function rotateArrayOptimised(arr, k) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }

  revese(arr, 0, size - 1); //O(n)
  revese(arr, 0, k - 1); //O(k)
  revese(arr, k, size - 1); //O(n-k)

  return arr;
}

function revese(arr, left, right) {
  while (left < right) {
    // let temp = arr[left];
    // arr[left] = arr[right];
    // arr[right] = temp;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

//Time Complexity == O(n )
//Space Complexity == O(1)
console.log(rotateArrayOptimised(arr, 3));
