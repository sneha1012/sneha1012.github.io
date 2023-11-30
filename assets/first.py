grammar = {
  'S': {'aBc', 'dEf', 'g'},
  'B': {'h', 'i'}
}

def find_first_sets(grammar):
    """
    Finds the first sets of all non-terminals in the given grammar.
    """
    first_sets = {}
    non_terminals = list(grammar.keys())

    # Step 1: Initialize first sets of all non-terminals to empty sets
    for non_terminal in non_terminals:
        first_sets[non_terminal] = set()

    # Step 2: Iterate until no changes are made to any first sets
    while True:
        updated = False
        for non_terminal in non_terminals:
            for production in grammar[non_terminal]:
                for symbol in production:
                    if symbol in non_terminals:
                        # Step 3: Add first set of symbol to first set of non_terminal
                        before_size = len(first_sets[non_terminal])
                        first_sets[non_terminal].update(first_sets[symbol])
                        if before_size != len(first_sets[non_terminal]):
                            updated = True
                        if '' not in first_sets[symbol]:
                            # If epsilon is not in first set of symbol, stop adding first sets
                            break
                    else:
                        # Step 4: Add symbol to first set of non_terminal
                        before_size = len(first_sets[non_terminal])
                        first_sets[non_terminal].add(symbol)
                        if before_size != len(first_sets[non_terminal]):
                            updated = True
                        break
                else:
                    # If epsilon is in all first sets of production, add epsilon to first set of non_terminal
                    before_size = len(first_sets[non_terminal])
                    first_sets[non_terminal].add('')
                    if before_size != len(first_sets[non_terminal]):
                        updated = True

        if not updated:
            # No more changes were made to any first sets
            break

    return first_sets
