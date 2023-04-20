from collections import deque


class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

# pre-order O(n)


def pre_order_iterative(root):
    # - visit node
    # - traverse left
    # - traverse right

    stack = []
    stack.append(root)

    while(stack):
        node = stack.pop()
        print(node.data, end=' ')

        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)


def pre_order_recursive(root):
    if root:
        print(root.data, end=' ')
        pre_order_recursive(root.left)
        pre_order_recursive(root.right)


# in-order O(n)
def in_order_iterative(root):

    # - traverse left
    # - visit node
    # - traverse right
    stack = []
    node = root

    while True:
        if node:
            stack.append(node)
            node = node.left
        elif stack:
            node = stack.pop()
            print(node.data, end=' ')
            node = node.right
        else:
            break


def in_order_recursive(root):
    if root:
        in_order_recursive(root.left)
        print(root.data, end=' ')
        in_order_recursive(root.right)


# post-order O(n)
def post_order_recursive(root):
    # - traverse left
    # - traverse right
    # - visit node

    if root:
        post_order_recursive(root.left)
        post_order_recursive(root.right)
        print(root.data, end=' ')


# level-order O(n)
def level_order_iterative(root):
    queue = deque()
    queue.append(root)

    while(queue):
        node = queue.popleft()
        print(node.data, end=' ')

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
