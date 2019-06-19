class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

# Have no idea how to do this
# import sys
# sys.path.insert(0, '../../data_structures')

# import node

def intersection(l1: Node, l2: Node) -> Node:
    l1_end, len1 = get_tail(l1)
    l2_end, len2 = get_tail(l2)

    if l1_end != l2_end:
        return None

    if len1 > len2:
        l1 = move_head(l1, len1 - len2)
    else:
        l2 = move_head(l2, len2 - len1)

    while l1 != l2:
        l1 = l1.next
        l2 = l2.next
        print(l1.value, l2.value)

    return l1

def move_head(head: Node, pos: int) -> Node:
    current = head
    while pos > 0:
        current = current.next
        pos -= 1

    return current

def get_tail(head: Node) -> (Node, int):
    current = head
    length = 0
    while not current.next == None:
        current = current.next
        length += 1
    return (current, length)

inter = Node('c')
inter.next = Node('a')
inter.next.next = Node('r')

l1 = Node('r')
l1.next = Node('a')
l1.next.next = Node('c')
l1.next.next.next = Node('e')
l1.next.next.next.next = inter

l2 = Node('r')
l2.next = Node('e')
l2.next.next = Node('d')
l2.next.next.next = inter

res = intersection(l1, l2)
print(res.value)