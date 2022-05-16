//Given two positive integers, return whether or not they
//have the same numbers and same frequency of numbers

function sameFrequency(n1, n2) {
  n1 = n1.toString();
  n2 = n2.toString();
  let nums = {};

  if (n1.length !== n2.length) return false;

  for (let i = 0; i < n1.length; i++) {
    let num = n1[i];
    nums[num] = (nums[num] || 0) + 1;
  }

  for (let i = 0; i < n2.length; i++) {
    let num = n2[i];
    if (!(nums[num])) return false;
    else (nums[num])--;
  }
  return true;
}