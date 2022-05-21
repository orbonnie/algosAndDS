function flatten(nested) {
  let flatArr = [];

  if (nested.length === 1) return nested[0];
  flatArr = nested[0];
  return flatArr = flatArr.concat(flatten(nested.slice(1)));
}