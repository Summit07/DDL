const getVowelCount = (inputStr) => {
  let totalVowelCount = 0;
  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
      totalVowelCount++;
  }
  return totalVowelCount;
};

const findVowel = (str) => {
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let totalCount = 0;
  let objCount = {};

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      totalCount += 1;
      objCount[str[i]] = (objCount[str[i]] || 0) + 1;
    }
  }

  return { totalCount, objCount };
};

console.log(findVowel("hello how are you today programiz website?"));
