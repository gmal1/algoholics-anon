def sum_digits(l1, l2):
    carry = 0

    output = None
    outputPtr = None

    while(l1 or l2):
        sum = l1.val if l1 else 0
        sum += l2.val if l2 else 0
        sum += carry

        carry = 0

        if sum > 9:
            carry = 1
            sum -= 10

        if not output:
            output = Node(sum)
            outputPtr = output
        else:
            outputPtr.next = Node(sum)
            outputPtr = outputPtr.next

        if l1: l1 = l1.next
        if l2: l2 = l2.next
    
    return output
        

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

# l1 = Node(7)
# l1.next = Node(1)
# l1.next.next = Node(6)

# l2 = Node(5)
# l2.next = Node(9)
# l2.next.next = Node(2)
# l2.next.next.next = Node()

l1 = Node(6)
l1.next = Node(1)
l1.next.next = Node(7)

l2 = Node(2)
l2.next = Node(9)
l2.next.next = Node(5)

output = sum_digits(l1, l2)
current = output
while current:
    print(current.val, end='')
    current = current.next
print('')