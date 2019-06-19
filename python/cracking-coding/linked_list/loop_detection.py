class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def detect_loop(head: Node) -> Node:
    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            break  

    if not fast or not fast.next:
        return None

    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next

    return fast

head = Node('a')
head.next = Node('b')
head.next.next = Node('c')
head.next.next.next = Node('d')
head.next.next.next.next = Node('e')
head.next.next.next.next.next = head.next.next

loop = detect_loop(head)
print(loop.value)
