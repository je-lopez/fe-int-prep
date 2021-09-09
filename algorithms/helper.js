// helper function to test output
const compareArrays = (arr1, arr2) => {
  if (arr1 === null && arr2 === null) return true;
  if (((arr1 === null || arr2 === null) && arr1 !== arr2) || arr1.length !== arr2.length) return false;

  const arrsLen = arr1.length;
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  for (let i = 0; i < arrsLen; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

module.exports = {
  compareArrays,
};
