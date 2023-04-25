const partition = (arr, low, high) => {
  let pivot = arr[high];
  let left = low;
  let right = high;

  while (left <= right) {
    if (arr[left] <= pivot) {
      left++;
    } else if (arr[right] >= pivot) {
      right--;
    } else {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  swap(arr, left, high);
  return left;
};

function quickSort(arr, L, R) {
  if (L < R) {
    const pivotIndex = partition(arr, L, R);
    quickSort(arr, L, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, R);
  }
}

function swap(arr, index1, index2) {
  // es6 Destructuring
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

let data = [8, 9, 2, 5, 1];
quickSort(data, 0, data.length - 1);
console.log(data);
