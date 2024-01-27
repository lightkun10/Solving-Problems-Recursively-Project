/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

let findSmallest = (arr) => {
  let smallest = arr[0];

  arr.forEach((ele) => {
    if (smallest > ele) { smallest = ele };
  });

  return smallest;
}

let removeSmallest = (arr, ele) => {
  const index = arr.indexOf(ele);

  if (index !== -1) {
    arr.splice(index, 1);
  }

  return arr;
}

function sort(nums, sorted = []) {
  // BASE CASE; If `nums` is empty, then return `sorted`
  if (nums.length === 0) {
    return sorted;
  }

  // Find the smallest element in nums
  const smallest = findSmallest(nums);

  // Add the smallest element to the end of sorted
  sorted.push(smallest);

  // Remove the smallest element from nums
  const updateNums = removeSmallest(nums, smallest);

  // Recursively call sort with updated sorted and nums
  return sort(updateNums, sorted);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
