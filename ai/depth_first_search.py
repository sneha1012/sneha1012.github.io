def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()  # Set to keep track of visited nodes

    visited.add(start)  # Mark the current node as visited
    print(start)  # Process the node (in this case, print it)

    # Recursively visit all adjacent unvisited nodes
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Example graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

# Start DFS from node 'A'
dfs(graph, 'A')
