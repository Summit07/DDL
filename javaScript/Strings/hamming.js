// Hamming Distance === when an y character of the string is different from other string then number of different character called hamming distange
// example ===   hello  = hwllr    in thos [e,o] != [w,r]

function hammingDistance(string1, string2) {
  if (string1.length != string2.length) return false;
  let distance = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] != string2[i]) {
      distance++;
    }
  }

  return distance;
}

console.log(hammingDistance("hellom", "hwllrl"));
