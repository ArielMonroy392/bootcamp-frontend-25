//Exercise Description
// Create a function called customFilter that works like the built-in Array.prototype.filter.
// The function should:
// Take an array and a callback function as arguments.
// Return a new array with the elements that pass the test implemented by the callback.

//Example
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = customFilter(numbers, function (n) {
  return n % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

// Solution
function customFilter(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) result.push(item);
  }
  return result;
}
