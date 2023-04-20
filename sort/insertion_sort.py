def insertion_sort(arr):
    for i in range(1, len(arr)):
        curr = arr[i]

        left = i-1
        while left >= 0 and arr[left] > curr:
            arr[left+1] = arr[left]
            left -= 1
        arr[left+1] = curr
    return arr


def main():
    list = [99, 0, 5, 20, 123, 0, -1, 72, 21, 22, 13, 8, 7, 67, 29, 1, 2, 4]
    insertion_sort(list)
    print(list)

    list = [3, 9, 2, 1]
    insertion_sort(list)
    print(list)


main()
