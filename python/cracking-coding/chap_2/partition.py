def partition(h, part):
    head = Node(h.val)
    tail = head

    current = h.next

    while current:
        curr_val = current.val
        node = Node(curr_val)
        if curr_val < part:
            node.next = head.next
            head.next = node
        else:
            tail.next = node
            tail = node

        current = current.next

    return head


class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


head = Node(3)
head.next = Node(5)
head.next.next = Node(8)
head.next.next.next = Node(5)
head.next.next.next.next = Node(10)
head.next.next.next.next.next = Node(2)
head.next.next.next.next.next.next = Node(1)

# current = partition(head, 5)
# while current:
#     print(current.val)
#     current = current.next
