from collections import deque

def bfs(graph, start):
    visited = set()  # Set to keep track of visited nodes
    queue = deque([start])  # Initialize the queue with the start node

    while queue:
        node = queue.popleft()  # Get the next node from the queue
        print(node)  # Process the node (in this case, print it)
        visited.add(node)  # Mark the node as visited

        # Enqueue the neighboring nodes that have not been visited
        for neighbor in graph[node]:
            if neighbor not in visited:
                queue.append(neighbor)

# Example graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

# Start BFS from node 'A'
bfs(graph, 'A')
