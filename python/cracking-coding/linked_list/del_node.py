import math


def del_node(node):
    if not node:
        return

    next = node.next
    node.val = next.val
    node.next = next.next


class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


head = Node("a")
head.next = Node("b")
head.next.next = Node("c")
head.next.next.next = Node("d")
head.next.next.next.next = Node("e")
head.next.next.next.next.next = Node("f")

del_node(head.next.next)

current = head
while current:
    print(current.val)
    current = current.next
