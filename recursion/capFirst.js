function capitalizeFirst (arr) {
  let caps = [];
  if (arr.length === 0) return caps;
  caps.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return caps.concat(capitalizeFirst(arr.slice(1)));
}