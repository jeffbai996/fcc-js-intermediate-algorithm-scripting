// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(...arrs) {
  // declare array to store result
  const result = [];
  // loop through first level arr
  for (let i = 0; i < arrs.length; i++) {
    // loop through second level arr
    for (let j = 0; j < arrs[i].length; j++) {
      const val = arrs[i][j];
      // check if result does not include 'val'
      if (!result.includes(val)) {
        result.push(val);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);