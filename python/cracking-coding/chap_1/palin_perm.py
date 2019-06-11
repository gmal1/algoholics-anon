def palin_perm(str):
    bitvec = [0] * 26

    str = str.lower()

    for char in str:
        charCode = ord(char) - ord("a")

        if charCode >= 0 and charCode < 26:
            if bitvec[charCode] == 0:
                bitvec[charCode] = 1
            else:
                bitvec[charCode] = 0

    one = False
    for i in range(26):
        if not one and bitvec[i] == 1:
            one = True
        elif one and bitvec[i] == 1:
            return False

    return True


print(palin_perm("tact coa"))
print(palin_perm("racecara"))
print(palin_perm("tactcoapapa"))
print(palin_perm(""))
print(palin_perm("loolo"))

