const { compareArrays } = require('./helper');

// given a targetSum and array of nums,
//  return an array containing the shortest combination that add up to targetSum
//
// m = targetSum
// n = nums.length

// time: O(n^m *m)
// space: O(m^2 * n)
const bestSum1 = (targetSum, nums) => {
  let bestSum = null;

  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of nums) {
    const remainingNums = bestSum1(targetSum - num, nums);

    if (remainingNums !== null) {
      const sumCombination = [...remainingNums, num];

      if (!bestSum || sumCombination.length < bestSum.length) {
        bestSum = sumCombination;
      }
    }
  }

  return bestSum;
};

console.log(compareArrays(bestSum1(7, [2, 3]), [2, 2, 3]));
console.log(compareArrays(bestSum1(7, [5, 3, 4, 7]), [7]));
console.log(compareArrays(bestSum1(8, [2, 4, 5]), [4, 4]));
console.log(compareArrays(bestSum1(8, [2, 3, 5]), [3, 5]), '\n');

// time: O(m^2 * n)
// space: O(m^2)
const bestSum2 = (targetSum, nums, memo={}) => {
  let bestSum = null;

  if (memo[targetSum]) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of nums) {
    const remainingNums = bestSum2(targetSum - num, nums, memo);

    if (remainingNums !== null) {
      const sumCombination = [...remainingNums, num];

      memo[targetSum] = sumCombination;

      if (!bestSum || sumCombination.length < bestSum.length) {
        bestSum = sumCombination;
      }
    }
  }

  memo[targetSum] = bestSum;
  return memo[targetSum];
};

console.log(compareArrays(bestSum2(7, [2, 3]), [2, 2, 3]));
console.log(compareArrays(bestSum2(7, [5, 3, 4, 7]), [7]));
console.log(compareArrays(bestSum2(8, [2, 4, 5]), [4, 4]));
console.log(compareArrays(bestSum2(8, [2, 3, 5]), [3, 5]));
console.log(compareArrays(bestSum2(100, [1, 2, 5, 25]), [25, 25, 25, 25]));