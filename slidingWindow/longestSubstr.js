function longestSubStr(str) {
  if (!str) return;

  let start = 0;
  let longest = 1;
  let temp = str[start];

  for (let i = 1; i < str.length; i++) {
      let char = str[i];
      let found = temp.indexOf(char);
      if (found === -1) {
          temp += char;
          longest = Math.max(longest, temp.length);
      } else {
          start = found + 1;
          temp = temp.slice(start);
          i--;
          longest = Math.max(longest, temp.length);
      }
  }
  return longest;
}