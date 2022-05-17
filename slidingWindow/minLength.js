const minLength = (arr, target) => {
  if (arr.length === 0) return 0;
  let addends = Infinity;
  let temp = 1;
  let start = 0;
  let sum = arr[0];

  for (let i = 0 + 1; i <= arr.length; i++) {
     while (sum >= target) {
         addends = Math.min(addends, temp);
         if (addends === 1) return addends;
         sum = sum - arr[start];
         start++;
         temp = temp - 1;
     }
      if (sum < target) {
          sum = sum + arr[i];
          temp++;
      }
  }

  return addends === Infinity ? 0 : addends;
}