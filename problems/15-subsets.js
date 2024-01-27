/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

let subsets = (arr) => {
  // Base case; An empty array has one subset, which is an empty array itself.
  if (arr.length === 0) {
    return [[]];
  }

  // Take the first and the others element for each recursive to then combine
  let lastEle = arr[arr.length - 1];
  // Here, I take each element that is working toward the base case.
  let withoutLastEle = subsets(arr.slice(0, -1));

  // Combine subsets without the last element and those with the last element
  let combinedSets = withoutLastEle.map((subset) => subset.concat(lastEle));

  // Return the union of subsets without the last element and those with the last element
  return withoutLastEle.concat(combinedSets);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
