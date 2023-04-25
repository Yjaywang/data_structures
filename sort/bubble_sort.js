// define swap element fn
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function BubbleSort(array) {
  let len = array.length;

  for (let j = 0; j < len - 1; j++) {
    for (let i = 0; i < len - j - 1; i++) {
      count++;
      if (array[i + 1] < array[i]) {
        swap(array, i, i + 1);
      }
    }
  }
  return array;
}

console.log(BubbleSort([8, 9, 2, 5, 1])); // [ 1, 2, 5, 8, 9 ]
