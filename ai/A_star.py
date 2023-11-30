from queue import PriorityQueue

def heuristic(node, goal):
    return abs(node[0] - goal[0]) + abs(node[1] - goal[1])

def astar(graph, start, goal):
    open_set = PriorityQueue()
    open_set.put((0, start))
    came_from = {start: None}
    g_score = {start: 0}
    f_score = {start: heuristic(start, goal)}

    while not open_set.empty():
        current = open_set.get()[1]
        if current == goal:
            path = []
            while current:
                path.append(current)
                current = came_from[current]
            return path[::-1]

        for neighbor in graph[current]:
            tentative_g_score = g_score[current] + graph[current][neighbor]
            if neighbor not in g_score or tentative_g_score < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g_score
                f_score[neighbor] = tentative_g_score + heuristic(neighbor, goal)
                open_set.put((f_score[neighbor], neighbor))

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

# Find the optimal path using A*
path = astar(graph, start, goal)
print("Optimal Path:", path)
