//checking square in another array
//arr1=[1,2,3,4] , arr2=[1,9,4,16]--case 1
//arr1=[1,2,4,2] , arr2=[1,4,4,16]---case 2

//map={key:value,key:value, key:value}  , value is same if square is same
//map1={1:1,2:2,4:1}
//map1={1:1,4:2,16:1}

// time complexity O(n) Linear

function checkSquare(arr1, arr2) {
  let map1 = {};
  let map2 = {};
  for (item of arr1) {
    //n times
    map1[item] = (map1[item] || 0) + 1;
  }
  console.log("map1", map1);
  //   console.log(map1);
  for (item of arr2) {
    ///n times
    map2[item] = (map2[item] || 0) + 1;
  }
  console.log("map2", map2);
  //   console.log(map2);
  for (let key in map1) {
    // n times
    console.log("key", key);
    if (!map2[key * key]) {
      // object key compare in term of sqare
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      // value compare
      return false;
    }
  }
  return true;
}

const res = checkSquare([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(res);
