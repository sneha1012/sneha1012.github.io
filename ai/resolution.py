def resolve(c1, c2):
    resolved = False
    for literal in c1:
        if ('~' + literal) in c2:
            new_clause = [x for x in (c1 + c2) if x != literal and x != ('~' + literal)]
            resolved = True
            if len(new_clause) == 0:
                return [[]]  # Empty clause, contradiction found
            else:
                return [new_clause]  # Resolved clause
    if not resolved:
        return []  # No resolution possible

def resolution(KB, alpha):
    clauses = KB + [alpha]
    new_clauses = clauses.copy()

    while True:
        n = len(new_clauses)
        pairs = [(new_clauses[i], new_clauses[j]) for i in range(n) for j in range(i+1, n)]

        for (ci, cj) in pairs:
            resolvents = resolve(ci, cj)
            for resolvent in resolvents:
                if resolvent not in new_clauses:
                    new_clauses.append(resolvent)

        if new_clauses[n:] == new_clauses[:n]:  # No new clauses added
            return False  # Knowledge base does not entail alpha

        if [] in new_clauses:  # Contradiction found
            return True  # Knowledge base entails alpha

KB = [
    ['P', '~Q'],
    ['~P', 'R'],
    ['S', '~R'],
    ['Q', 'S']
]

alpha = 'Q'

result = resolution(KB, alpha)

if result:
    print("Knowledge base entails alpha.")
else:
    print("Knowledge base does not entail alpha.")
