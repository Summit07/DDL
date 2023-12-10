// Find the maximun occuring charecter in given String

function getCharString(str) {
  const map = {};
  str.split("").forEach((element) => {
    map[element] = map[element] ? map[element] + 1 : 1;
    console.log(map[element]);
  });
  console.log(map);
  let max = 1;
  let char = str[0];
  for (let k in map) {
    if (map[k] > max) {
      max = map[k];
      char = k;
    }
  }
  return char;
}

const res = getCharString("Hello Worldddddd");
console.log(res);
