from constraint import Problem
problem = Problem()
numpieces = 2
cols = range(numpieces)
rows = range(numpieces)
problem.addVariables(cols, rows)
for col1 in cols:
     for col2 in cols:
         if col1 < col2:
             problem.addConstraint(lambda row1, row2: row1 != row2,(col1, col2))
solutions = problem.getSolutions()
print(solutions)

