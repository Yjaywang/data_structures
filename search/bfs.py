# O(|v| + |E|)
from collections import deque

graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E', 'F'],
    'C': ['G'],
    'D': [],
    'E': [],
    'F': ['H'],
    'G': ['I'],
    'H': [],
    'I': []
}


def bfs(graph, node):
    visit = []
    queue = deque()

    visit.append(node)
    queue.append(node)

    while queue:
        s = queue.popleft()
        print(s, end=' ')

        for n in graph[s]:
            if n not in visit:
                visit.append(n)
                queue.append(n)


def main():
    bfs(graph, 'A')


main()
