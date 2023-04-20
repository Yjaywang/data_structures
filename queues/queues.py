

from collections import deque


class Queue:
    def __init__(self):
        # double end queue
        self.data = deque()

    # insert O(1)

    def enqueue(self, node):
        self.data.append(node)

    # delete O(1)

    def dequeue(self):
        self.data.popleft()
