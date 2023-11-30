from queue import PriorityQueue

def best_first_search(graph, start, goal):
    open_set = PriorityQueue()
    open_set.put((0, start))
    came_from = {start: None}

    while not open_set.empty():
        current = open_set.get()[1]
        if current == goal:
            path = []
            while current:
                path.append(current)
                current = came_from[current]
            return path[::-1]

        for neighbor in graph[current]:
            if neighbor not in came_from:
                came_from[neighbor] = current
                open_set.put((graph[current][neighbor], neighbor))

    return None

# Example graph represented as an adjacency list with weighted edges
graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'D': 2, 'E': 4},
    'C': {'F': 6},
    'D': {},
    'E': {'F': 1},
    'F': {}
}

# Start and goal nodes
start = 'A'
goal = 'F'

# Find the optimal path using Best-First Search
path = best_first_search(graph, start, goal)
print("Optimal Path:", path)
