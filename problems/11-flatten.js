/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
let flatten = (arr) => {
  let flattenedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];

    // Base case; If element is not an array, push it into the array
    if (!Array.isArray(ele)) {
      flattenedArr.push(ele);
    } else {
      // If element is an array, recursively call on each array until it become an element
      flattenedArr = flattenedArr.concat(flatten(ele));
    }
  }

  return flattenedArr;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
