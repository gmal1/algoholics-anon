def urlify(str):
    num_spaces = 0
    start = False
    for i in range(len(str) - 1, 0, -1):
        if not start and str[i] == ' ': continue
        start = True

        if str[i] == ' ': num_spaces += 1
    
    i = 0
    while(num_spaces > 0):
        if str[i] == ' ':
            str = str[:i] + '%20' + str[i + 1:]
            num_spaces -= 1
        
        i += 1

    return str

str = 'Mr John Smith'

def urlify2(str):
    output = ''

    for val in str:
        if not val == ' ':
            output += val
        else:
            output += '%20'

    return output

print(urlify2(str))
