//accepts two arrays
//should return true if every number in arr1 has a corresponding squared value
//  in arr2
//corresponding values do not have to have to be at the same index
//there must be a distinct corresponding value for each duplicate

const same = (arr1, arr2) => {
  for (i in arr1) {
    let n = arr1[i];
    let match = arr2.findIndex(val => val === n**2);
    if (match < 0) return false;
    arr2.splice(match, 1);
  }
  return true;
}


