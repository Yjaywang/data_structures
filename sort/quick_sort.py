def partition(arr, low, high):

    pivot = arr[high]

    left = low
    right = high-1
    while left <= right:
        if arr[left] <= pivot:
            left += 1
        elif arr[right] >= pivot:
            right -= 1
        # if not fit left and right criteria, swap them
        else:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1

    arr[left], arr[high] = arr[high], arr[left]
    return left


def quick_sort(arr, low, high):
    if low < high:
        partition_index = partition(arr, low, high)
        quick_sort(arr, low, partition_index - 1)
        quick_sort(arr, partition_index + 1, high)


def main():
    list = [99, 0, 5, 20, 123, 0, -1, 72, 21, 22, 13, 8, 7, 67, 29, 1, 2, 4]
    quick_sort(list, 0, len(list) - 1)
    print(list)

    list = [3, 9, 2, 1]
    quick_sort(list, 0, len(list) - 1)
    print(list)


main()
