class Node():
    def __init__(self):
        self.val = 0
        self.key = 0
        self.next = None
        self.prev = None
class LRUCache:
    def __init__(self, capacity: int):
        self.cache={}
        self.capacity = capacity
        self.head, self.tail = Node(), Node()
        #at initial, head tail connect each other
        self.head.next, self.tail.prev = self.tail, self.head

    def get(self, key: int) -> int:
        node = self.cache.get(key, None)

        if not node:
            return -1
        
        self._move_to_front(node)
        return node.val


    def put(self, key: int, value: int) -> None:
        node = self.cache.get(key, None)

        if not node:
            #need to check capa before add cache
            if len(self.cache) == self.capacity:
                tail = self._pop_tail()
                del self.cache[tail.key]

            newNode = Node()
            newNode.key = key
            newNode.val = value
            self.cache[key] = newNode
            self._add_node(newNode)

        else:
            node.val = value
            self._move_to_front(node)
            
            


    
    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _move_to_front(self, node):
        self._remove(node)
        self._add_node(node)
    
    def _add_node(self, node):
        node.prev = self.head
        node.next = self.head.next

        self.head.next.prev = node
        self.head.next = node

    def _pop_tail(self):
        res = self.tail.prev
        self._remove(res)
        return res


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)