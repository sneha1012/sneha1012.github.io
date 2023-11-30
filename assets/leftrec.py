
grammar = {
  'S': {'Aa', 'Ab', 'Sc', 'Sd'},
  'A': {'Aa', 'Ab'}
}

def eliminate_left_recursion(grammar):
    """
    Eliminates left recursion from the given grammar.
    """
    # Step 1: Find non-terminals that have left recursion
    non_terminals = list(grammar.keys())
    for i in range(len(non_terminals)):
        for j in range(i):
            A = non_terminals[i]
            B = non_terminals[j]
            if B in grammar[A]:
                # Check for left recursion
                for production in grammar[A][B]:
                    if production.startswith(B):
                        # A has left recursion
                        # Step 2: Create new non-terminal
                        new_A = A + "'"
                        while new_A in grammar:
                            new_A += "'"
                        grammar[new_A] = {}
                        # Step 3: Move all right-hand sides with left recursion to new non-terminal
                        new_productions = []
                        for prod in grammar[A][B]:
                            if prod.startswith(B):
                                new_prod = prod[len(B):] + new_A
                                new_productions.append(new_prod)
                            else:
                                new_prod = prod + new_A
                                grammar[A][B] = new_productions
                        # Step 4: Add epsilon production to new non-terminal
                        grammar[new_A] = {'': [new_A]}
                        # Step 5: Replace left-recursive productions with new productions
                        for C in non_terminals[:i]:
                            for production in grammar[C][A]:
                                new_production = production + new_A
                                grammar[C][new_A] = [new_production]
                        break
                else:
                    continue
                break
        else:
            continue
        break

    return grammar

