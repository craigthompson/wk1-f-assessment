// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  const newArr = [];
  for (const num of numbers) {
    if (num > 10) {
      newArr.push(num);
    }
  }
  return newArr;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  const newArr = [];
  for (const word of words) {
    if (word[0].toUpperCase() === "B") {
      newArr.push(word);
    }
  }
  return newArr;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  for (const item of additionalItems) {
    originalArray.push(item);
  }
  return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const newArr = [];
  for (const item of items) {
    if (item.length === length) {
      newArr.push(item);
    }
  }
  return newArr;
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  const newArr = [];
  for (let i = 0; i < items.length; i += 2) {
    newArr.push(items[i]);
  }
  return newArr;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === letter) {
      newArr.push(i);
    }
  }
  return newArr;
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  const newArr = [];
  items = items.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < n; i++) {
    newArr.unshift(items[i]);
  }
  return newArr;
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  // indexOf returns -1 if the value can't be found in items
  const index = items.indexOf(value);
  return index !== -1 ? index : undefined;
  // or I also did the above line as shown below
  // if (index !== -1) {
  //   return index;
  // } else {
  //   return undefined;
  // }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const newArr = [];
  const newArrDesiredSize = Math.abs(stop - start);
  for (let i = 0; i <= newArrDesiredSize; i++) {
    newArr.push(start);
    start++;
  }
  return newArr;
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
