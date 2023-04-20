

class Stack:
    def __init__(self):
        self.data = []
    # O(1)

    def push(self, node):
        self.data.append(node)
    # O(1)

    def pop(self):
        self.data.pop()
