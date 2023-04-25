function insertSort(arr) {
  let len = arr.length;

  for (let i = 1; i < len; i++) {
    let cur = arr[i];
    let left = i - 1;
    while (left >= 0 && arr[left] > cur) {
      arr[left + 1] = arr[left];
      left--;
    }
    arr[left + 1] = cur;
  }
  return arr;
}
console.log(insertSort([8, 9, 2, 5, 1]));
// [1, 2, 5, 8, 9]
