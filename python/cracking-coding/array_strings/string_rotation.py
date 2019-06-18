def string_rotation(original, rotation):
    return is_substr(original + original, rotation)


def is_substr(str1, str2):
    return str2 in str1


print(is_substr("waterbottle", "water"))

