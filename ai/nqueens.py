def solve_n_queens(n):
    def backtrack(row, cols, diagonals, anti_diagonals):
        if row == n:
            solutions.append(cols)
        else:
            for col in range(n):
                diagonal = row - col
                anti_diagonal = row + col
                if col not in cols and diagonal not in diagonals and anti_diagonal not in anti_diagonals:
                    backtrack(row + 1, cols + [col], diagonals + [diagonal], anti_diagonals + [anti_diagonal])

    solutions = []
    backtrack(0, [], [], [])
    return solutions

# Example usage
n = 4
solutions = solve_n_queens(n)
for solution in solutions:
    print(solution)
