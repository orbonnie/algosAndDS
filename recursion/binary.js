function binarySearch(arr, target){
  let left = 0;
  let right = arr.length - 1;

  const innerSearch = () => {
      let mid = Math.floor((left + right) / 2);

      if (left > right) return -1;

      if (target === arr[mid]) return mid;

      if (target > arr[mid]) {
          left = mid + 1;
          return innerSearch();
      }
      if (target < arr[mid]) {
          right = mid - 1;
          return innerSearch();
      }
  }
  return innerSearch();
}