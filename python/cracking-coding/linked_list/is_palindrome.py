def is_palindrome(ll):
    arr = []

    current = ll
    while current:
        arr.append(current.val)
        current = current.next

    for i in range(int(len(arr) / 2)):
        front = arr[i]
        back = arr[len(arr) - i - 1]
        if front != back:
            return False

    return True

def is_palindrome2(ll):
    fast = ll
    slow = ll

    stack = []

    while fast != None and fast.next != None:
        stack.append(slow.val)
        slow = slow.next
        fast = fast.next.next

    if fast != None:
        slow = slow.next

    while slow:
        top = stack.pop()
        if slow.val != top:
            return False
        slow = slow.next

    return True


class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

ll = Node('r')
ll.next = Node('a')
ll.next.next = Node('c')
ll.next.next.next = Node('e')
ll.next.next.next.next = Node('c')
ll.next.next.next.next.next = Node('a')
ll.next.next.next.next.next.next = Node('r')

l2 = Node('a')
l2.next = Node('a')

l3 = Node('a')
l3.next = Node('b')
l3.next.next = Node('c')

print(is_palindrome2(ll))
print(is_palindrome2(l2))
print(is_palindrome2(l3))