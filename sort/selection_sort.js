function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let curIdx = i + 1; curIdx < arr.length; curIdx++) {
      if (arr[curIdx] < arr[minIndex]) {
        minIndex = curIdx;
      }
    }
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([29, 10, 14, 37, 13]));
