//Anagram String:- number of letter are same but arrangement is not same
//'hello'  'llhoe'

//condition 1 - check the length of the string is equal then apply code
//make map to check how many times of the letter are coming
//{h:1,e:1, l:2,o:1} decrement the value when u find the same letter, make equal to 0 for all then become annagram

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    console.log("number of letter not saame");
    return false;
  }

  let count = [];

  for (let letter of str1) {
    console.log(letter);
    count[letter] = (count[letter] || 0) + 1; //undefined and null check in react and javascript
    // console.log(count);
    // console.log(count[letter]);
  }
  // for (let i = 0; i < str1.length; i++) {
  //   const e = str1[i];
  //   count[e] = (count[e] || 0) + 1; //undefined and null check in react and javascript

  //   console.log(count[e]);
  // }
  // for (let i = 0; i < str2.length; i++) {
  //   const e = str2[i];
  //  if(!count[i]){
  //   return false;
  //  }
  //  count[i] -= 1;
  // }

  for (let letter of str2) {
    if (!count[letter]) {
      console.log(count);
      return false;
    }
    count[letter] -= 1;
  }
  // console.log("matched the all string");
  return true;
}

const check = isAnagram("summit", "summmt");
console.log(check);
