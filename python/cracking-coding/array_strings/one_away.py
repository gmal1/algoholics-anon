import math
def one_away(target, str):
    diff = abs(len(target) - len(str))
    if (diff > 1): return False

    if (len(target) == len(str)):
        return one_replace(target, str)
    else:
        return one_insert_or_del(target, str)

def one_replace(target, str):
    found_dif = False

    for i in range(len(target)):
        if found_dif and target[i] != str[i]:
            return False
        
        if not found_dif and target[i] != str[i]:
            found_dif = True

    return True

def one_insert_or_del(target, str):
    found_dif = False

    small_str = target if len(target) < len(str) else str
    big_str = str if (len(target)) < len(str) else target

    indx1 = 0
    indx2 = 0 

    while(indx1 < len(small_str) and indx2 < len(big_str)):
        if not small_str[indx1] == big_str[indx2]:
            if found_dif: return False
            found_dif = True
        else:
            indx1 += 1
        indx2 += 1        
    
    return True


print(one_away('pale', 'bale'))
print(one_away('pale', 'cane'))
print(one_away('pale', 'pale'))
print(one_away('', ''))
print(one_away('pale', 'pales'))
print(one_away('bales', 'baes'))
print(one_away('bales', 'balesmf'))