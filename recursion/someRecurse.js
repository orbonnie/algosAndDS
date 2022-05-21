const some = (arr, cb) => {
  let found = false;
  console.log(arr.slice(1));
  if (arr.length === 1) return found;
  if (some(arr[0])) found = true;
  return some(arr.slice(1), cb)
}

const isOdd = val => val % 2 !== 0;

some([1,2,3,4], isOdd);