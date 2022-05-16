const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length -1;

  while (min <= max) {
      let mid = Math.floor((min + max) / 2);

      if (target === arr[mid]) return mid;
      if (target < arr[mid]) max = mid - 1;
      if (target > arr[mid]) min = mid + 1
  }
  return -1;
}