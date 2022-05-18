function maxSum(arr, num) {
  if (arr.length < num) return null;
  let max = 0;
  let temp = 0;

  for (let i = 0; i < num; i++) {
      max += arr[i];
  }
  console.log(max);
  temp = max;
  for (let n = num; n < arr.length; n++) {
      console.log(`${temp} - ${arr[n -num]} + ${arr[n]}`)
      temp = temp - arr[n -num] + arr[n];
      max = Math.max(max, temp);
  }
  return max;
}