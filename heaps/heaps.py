

# O(log n)
def max_heapify(a, heap_size, i):
    l = 2*i
    r = 2*i + 1

    largest = i

    if l < heap_size and a[l] > a[i]:
        largest = l

    if r < heap_size and a[r] > a[largest]:
        largest = r

    if largest != i:
        # swap elements
        a[i], a[largest] = a[largest], a[i]
        max_heapify(a, heap_size, largest)

# O(n)


def build_max_heap(a):
    heap_size = len(a)

    # ignore leaves
    for i in range(heap_size//2, 0, -1):
        max_heapify(a, heap_size, i)


def main():
    # root is at index 1
    # it can be at index zero but see here: https://www.quora.com/Why-do-indexes-for-heaps-start-at-1
    # and: https://stackoverflow.com/questions/22900388/why-in-a-heap-implemented-by-array-the-index-0-is-left-unused

    # root is at index 1
    # so left and right are 2i and 2i+1
    # if root is at index 0
    # left and right are 2i+1 and 2i+2

    a = [None, 0, 5, 20, 6, 12, 65, 1, 4, 9, 3, 89, 22, 25, 28, 10]
    build_max_heap(a)

    # print heap starting with the root at index 1
    print(f'Heap: {a[1:]}')


main()
