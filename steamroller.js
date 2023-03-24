// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // store result
  let result = [];

  // iterate through each item
  arr.forEach((item) => {
    // check if element is array
    if (Array.isArray(item)) {
      // concatenate result with item if true
      result = result.concat(steamrollArray(item));
    } else {
      result.push(item);
    }
  })
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);