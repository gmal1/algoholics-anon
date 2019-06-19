def kth_to_last(head, pos):
    scout = head
    while pos > 0:
        if not scout:
            return None
        scout = scout.next
        pos -= 1

    while scout:
        head = head.next
        scout = scout.next

    return head.val


class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)
head.next.next.next.next.next = Node(6)
head.next.next.next.next.next.next = Node(7)

print(kth_to_last(head, 2))
print(kth_to_last(head, 5))
print(kth_to_last(head, 10))
