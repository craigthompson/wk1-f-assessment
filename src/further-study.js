// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
  const newArr = [];
  for (const item of array1) {
    if (array2.indexOf(item) !== -1 && newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  }
  return newArr;
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
  const nums = [];
  for (let i = 1; i <= 100; i++) {
    if (i % a === 0 || i % b === 0 || i % c === 0) {
      nums.push(i);
    }
  }
  return nums;
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
  let str = "";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      str += count > 0 ? `${count + 1}${string[i]}` : `${string[i]}`;
      count = 0;
    }
  }
  return str;
}

export { commonStrings, compressString, divisibleByEither };
