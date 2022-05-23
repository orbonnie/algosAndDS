function allCaps(arr) {
  let caps = [];
  if (arr.length === 0) return caps;

  caps.push(arr[0].toUpperCase());
  return caps.concat(allCaps(arr.slice(1)));
}