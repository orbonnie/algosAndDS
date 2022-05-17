const isSubsequence = (str1, str2) => {
  if (!str1) return true;
  let current = 0;
  let next = 1;

   for (let i = 0; i < str2.length; i ++) {
       if (str1[current] === str2[i]) {
           current++;
       }
   }
  return current === str1.length;
}