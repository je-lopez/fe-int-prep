// count how many different ways you can travel from 0,0 to the bottom right corner

// time: O(2^n+m)
// space: O(n + m)
const gridTraveler1 = (m, n) => {
  if (m <= 0 || n <= 0) return 0;
  if (m === 1 || n === 1) return 1;
  return gridTraveler1(m - 1, n) + gridTraveler1(m, n - 1);
};

console.log(gridTraveler1(1, 0) === 0);
console.log(gridTraveler1(0, 1) === 0);
console.log(gridTraveler1(1, 1) === 1);
console.log(gridTraveler1(2, 3) === 3);
console.log(gridTraveler1(3, 2) === 3);
console.log(gridTraveler1(3, 3) === 6);

// time: O(n * m)
// space: O(n + m)
const gridTraveler2 = (m, n, memo={}) => {
  const key = m + ' ' + n;

  if (memo[key]) return memo[key];
  if (m === 1 || n === 1) return 1;
  if (m <= 0 || n <= 0) return 0;

  memo[key] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler2(1, 0) === 0);
console.log(gridTraveler2(0, 1) === 0);
console.log(gridTraveler2(1, 1) === 1);
console.log(gridTraveler2(2, 3) === 3);
console.log(gridTraveler2(3, 2) === 3);
console.log(gridTraveler2(3, 3) === 6);
console.log(gridTraveler2(18, 18) === 2333606220);