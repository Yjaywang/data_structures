

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class LinkedList:
    def __init__(self):
        self.head = None

    # search O(n)

    def search(self, target):
        curr = self.head
        while curr:
            if curr.data == target:
                return curr
            curr = curr.next
        return None

    # insert O(1)

    def insert(self, node):
        node.next = self.head
        if self.head:
            self.head.prev = node
        self.head = node
        node.prev = None

    def delete(self, node):
        if node.prev is not None:
            node.prev.next = node.next
        else:
            self.head = node.next

        if node.next is not None:
            node.next.prev = node.prev
