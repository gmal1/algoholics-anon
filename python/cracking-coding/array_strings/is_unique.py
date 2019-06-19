def is_unique(str):
    for i in range(len(str)):
        for j in range(i + 1, len(str)):
            if str[i] == str[j]:
                return False
    return True


# print(is_unique('abcdef'))
# print(is_unique('adfgdga'))


def is_unique2(str):
    uniques = set(str)
    return len(uniques) == len(str)


def is_unique3(str):
    # 128 ascii characters, extended ascii has 256 characters
    if len(str) > 128:
        return False
    bitVec = [0] * 128

    for char in str:
        charCode = ord(char)
        if bitVec[charCode] == 1:
            return False
        bitVec[charCode] = 1

    return True


print(is_unique(""))
print(is_unique3("abcdef"))
print(is_unique3("adfgdga"))

