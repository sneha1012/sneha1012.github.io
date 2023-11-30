
def graph_coloring(graph):
    colors = {}
    for node in graph:
        used_colors = {colors[neighbor] for neighbor in graph[node] if neighbor in colors}
        colors[node] = next(color for color in range(1, len(graph) + 1) if color not in used_colors)
    return colors

# Example usage
graph = {
    0: [1, 2, 3],
    1: [0, 2],
    2: [0, 1, 3],
    3: [0, 2]
}
coloring = graph_coloring(graph)

print(coloring)