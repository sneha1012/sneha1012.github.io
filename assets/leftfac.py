grammar = {
  'S': {'if E then S else S', 'if E then S'},
  'E': {'id', 'num'}
}

def eliminate_left_factoring(grammar):
    """
    Eliminates left factoring from the given grammar.
    """
    # Step 1: Find non-terminals that have common prefixes
    non_terminals = list(grammar.keys())
    for i in range(len(non_terminals)):
        A = non_terminals[i]
        productions = grammar[A]
        while True:
            # Find common prefixes in productions
            prefixes = {}
            for production in productions:
                if production[0] in prefixes:
                    prefixes[production[0]].append(production)
                else:
                    prefixes[production[0]] = [production]
            common_prefixes = {}
            for prefix in prefixes:
                if len(prefixes[prefix]) > 1:
                    common_prefixes[prefix] = prefixes[prefix]
            if not common_prefixes:
                # No common prefixes in A's productions
                break
            # Step 2: Create new non-terminal
            new_A = A + "'"
            while new_A in grammar:
                new_A += "'"
            grammar[new_A] = {}
            # Step 3: Move productions with common prefixes to new non-terminal
            for prefix in common_prefixes:
                new_production = prefix + new_A
                grammar[A].remove(prefix + common_prefixes[prefix][0][1:])
                grammar[new_A][common_prefixes[prefix][0][1:]] = common_prefixes[prefix]
                grammar[new_A][common_prefixes[prefix][0][1:]].remove(common_prefixes[prefix][0])
                grammar[new_A][common_prefixes[prefix][0][1:]].append(new_production)
            # Step 4: Add epsilon production to new non-terminal
            grammar[new_A] = {'': ['']}
            # Step 5: Replace common prefixes with new non-terminal
            for production in grammar[A]:
                if production[0] in common_prefixes:
                    grammar[A].remove(production)
                    new_production = production[len(common_prefixes[production[0]][0]):] + new_A
                    grammar[A][new_production[0]] = [new_production]
                    grammar[A][new_production[0]].extend(common_prefixes[production[0]])
                    grammar[A][new_production[0]].remove(production)
                    if not grammar[A][new_production[0]]:
                        del grammar[A][new_production[0]]
            productions = grammar[new_A]

    return grammar
