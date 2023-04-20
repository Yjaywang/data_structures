# O(n^2)
def bubble_sort(arr):
    n = len(arr)

    for i in range(n-1):
        for j in range(n-1):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    return arr


def main():
    list = [99, 0, 5, 20, 123, 0, -1, 72, 21, 22, 13, 8, 7, 67, 29, 1, 2, 4]
    bubble_sort(list)
    print(list)

    list = [3, 9, 2, 1]
    bubble_sort(list)
    print(list)


main()
