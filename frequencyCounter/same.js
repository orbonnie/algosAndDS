//accepts two arrays
//should return true if every number in arr1 has a corresponding squared value
//  in arr2
//corresponding values do not have to have to be at the same index
//there must be a distinct corresponding value for each duplicate

//nested loop
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (i in arr1) {
    let n = arr1[i];
    let match = arr2.findIndex(val => val === n**2);
    if (match < 0) return false;
    arr2.splice(match, 1);
  }
  return true;
}

//Refactored to O(n)
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] ? freqCounter1[val]++ : freqCounter1[val] = 1;
  }

  for (let val of arr2) {
    freqCounter2[val] ? freqCounter2[val]++ : freqCounter2[val] = 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }
  return true;
}

//Refactored to one array for loop
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    let val1 = arr1[i];
    let val2 = arr2[i];
    freqCounter1[val1] ? freqCounter1[val1]++ : freqCounter1[val1] = 1;
    freqCounter2[val2] ? freqCounter2[val2]++ : freqCounter2[val2] = 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }
  return true;
}



