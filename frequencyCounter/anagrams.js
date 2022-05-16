//given two strings determine if the second string is
//  is an anagram of the first

const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let charCounter1 = {};
  let charCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    charCounter1[char1] = (charCounter1[char1] || 0) + 1;
    charCounter2[char2] = (charCounter2[char2] || 0) + 1;
  }

  for (let key in charCounter1) {
    if (!(charCounter2[key])) return false;
    if (charCounter2[key] !== charCounter1[k]) return false;
  }
  return true;
}

//refactored with one object
const anagrams2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let i = 0; i < str1.length; i++) {
    let char = str2[i];
    if (lookup[char]) lookup[char]--;
    else return false;
  }
  return true;
}