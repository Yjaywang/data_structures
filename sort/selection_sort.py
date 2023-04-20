def selection_sort(arr):
    n = len(arr)

    for i in range(n-1):
        min = i

        for curr_idx in range(i+1, n):
            if arr[min] > arr[curr_idx]:
                min = curr_idx

        if min != i:
            temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
    return arr


def main():
    list = [99, 0, 5, 20, 123, 0, -1, 72, 21, 22, 13, 8, 7, 67, 29, 1, 2, 4]
    selection_sort(list)
    print(list)

    list = [3, 9, 2, 1]
    selection_sort(list)
    print(list)


main()
