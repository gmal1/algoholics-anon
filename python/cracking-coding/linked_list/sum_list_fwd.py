def sum_list(l1, l2):

    output = None
    outputPrev = None
    outputPointer = None

    while (l1 or l2):
        sum = l1.val if l1 else 0
        sum += l2.val if l2 else 0

        carry = 0

        if sum > 9:
            carry = 1
            sum -= 10

        if not output:
            if carry:
                output = Node(1)
                output.next = Node(sum)
                outputPointer = output.next
                outputPrev = output
            else:
                output = Node(sum)
                outputPointer = output
        else:
            outputPointer.next = Node(sum)
            outputPrev = outputPointer
            outputPrev.val += carry
            outputPointer = outputPointer.next

        if l1: l1 = l1.next
        if l2: l2 = l2.next

    return output


class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

l1 = Node(6)
l1.next = Node(1)
l1.next.next = Node(7)
l1.next.next.next = Node(5)

l2 = Node(2)
l2.next = Node(9)
l2.next.next = Node(5)

sum = sum_list(l1, l2)
print(sum.val)
print(sum.next.val)
print(sum.next.next.val)
print(sum.next.next.next.val)