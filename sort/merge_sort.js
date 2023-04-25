function merge(left, right) {
  const result = [];

  let i = 0; // record the left position
  let j = 0; // record the right position

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  //put the rest left array element to result
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  //put the rest right array element to result
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function mergeSlice(array) {
  const len = array.length;

  //edge case
  if (len === 1) {
    return array;
  }

  const mid = Math.floor(len / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, len);

  // recursive
  return merge(mergeSlice(left), mergeSlice(right));
}

console.log(mergeSlice([8, 9, 2, 5, 1])); // [ 1, 2, 5, 8, 9 ]
