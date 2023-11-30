def unify(x, y, substitution):
    if substitution is None:
        return None
    elif x == y:
        return substitution
    elif isinstance(x, str) and x.startswith('?'):
        return unify_variable(x, y, substitution)
    elif isinstance(y, str) and y.startswith('?'):
        return unify_variable(y, x, substitution)
    elif isinstance(x, list) and isinstance(y, list):
        return unify_lists(x, y, substitution)
    else:
        return None

def unify_variable(var, x, substitution):
    if var in substitution:
        return unify(substitution[var], x, substitution)
    elif x in substitution:
        return unify(var, substitution[x], substitution)
    else:
        substitution[var] = x
        return substitution

def unify_lists(list1, list2, substitution):
    if len(list1) != len(list2):
        return None
    else:
        for i in range(len(list1)):
            substitution = unify(list1[i], list2[i], substitution)
            if substitution is None:
                return None
        return substitution

# Example usage
substitution = unify('?x', 'John', {})
if substitution is not None:
    print("Unification succeeded.")
    print("Substitution:", substitution)
else:
    print("Unification failed.")
