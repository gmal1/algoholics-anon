def str_compression(input):
    output = ""
    count = 0

    for i in range(len(input) - 1):
        char = input[i]
        nxt_char = input[i + 1]

        if char == nxt_char:
            count += 1

        if not char == nxt_char or i + 2 == len(input):
            output += char + str(count + 1)
            count = 0

    return input if len(output) > len(input) else output


print(str_compression("aabccccccqq"))
print(str_compression("abcdef"))
print(str_compression("abcdefaavccc"))

