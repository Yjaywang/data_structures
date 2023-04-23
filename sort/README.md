1. bubble sort

- O(n^2)

  ![](https://i.imgur.com/bOxQM74.png)

  ![](https://i.imgur.com/SpXWj9L.png)

  ![](https://i.imgur.com/Uqxoka2.png)

  ![](https://i.imgur.com/4lQ1CSp.png)

2. quick sort

- worst O(n^2)
- avg O(nlogn)
  pivot:
- correct position in final, sorted array
- items to the left are smaller
- items to the right are larger
- how to choose pivot? => median of three

  ![](https://i.imgur.com/lvFa4Uj.png)

SOP:

- choose pivot

  ![](https://i.imgur.com/btqdWv7.png)

- swap pivot to the end

  ![](https://i.imgur.com/Ea2H4t1.png)

- compare left and right pointer,

  ![](https://i.imgur.com/RWqsi2B.png)

- repeat process, till left > right pointer

  ![](https://i.imgur.com/nJErhOR.png)

- swap pivot and left pointer element

  ![](https://i.imgur.com/EZ53e9y.png)

- pivot fit the criteria, but not sorted yet,

  ![](https://i.imgur.com/59KsmUX.png)

3. insertion sort

- O(n^2)
- work from left to right
- check each element and compare it to items on its left
- Insert the item tin the correct position in arr

  ![](https://i.imgur.com/ybvccgX.png)

  ![](https://i.imgur.com/iHujpvf.png)

  ![](https://i.imgur.com/J07p7WO.png)

4. selection sort

- O(n^2)
- during each iteration, select the smallest item from unsorted partition and move it to the sorted partition

![](https://i.imgur.com/7bQ9mXK.png)

![](https://i.imgur.com/ArsU4m4.png)

![](https://i.imgur.com/USUYL5O.png)

![](https://i.imgur.com/gxTtOIi.png)

![](https://i.imgur.com/hILym1J.png)

5. merge sort

- recursively
- worst O(nlogn)
  SOP:
- split arr to individual element
- sort and merge arr again and again

  ![](https://i.imgur.com/7POORca.png)

  ![](https://i.imgur.com/yxZtfHu.png)

  ![](https://i.imgur.com/ecqKNfa.png)

6. heap sort

- repeat max heap and heapify
- O(nlogn): build-max-heap O(n), heapify O(logn)
  SOP:
- create max heap
- remove largest item
- place item in sorted partition

  ![](https://i.imgur.com/9tDPnVn.png)

  ![](https://i.imgur.com/IryQzSS.png)

  ![](https://i.imgur.com/XgtyQP6.png)

- max heap

  ![](https://i.imgur.com/NXlKquh.png)

- heapify

  ![](https://i.imgur.com/rvJkXeQ.png)
