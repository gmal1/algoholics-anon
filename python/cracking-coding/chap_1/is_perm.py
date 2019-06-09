def is_perm(str, perm):
    if len(str) != len(perm): return False

    cache = {}

    for val in str:
        if val not in cache: cache[val] = 1
        else: cache[val] += 1

    for val in perm:
        if val not in cache: return False
        if cache[val] == 0: return False
        
        cache[val] -= 1
        if cache[val] == 0: del cache[val]

    return True


print(is_perm('', ''))
print(is_perm('', 'abs'))
print(is_perm('bca', 'abc'))
print(is_perm('baac', 'aabb'))