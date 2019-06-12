class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    def append(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node

        self.length += 1
    
    def prepend(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head = node

        self.length += 1
    
    def contains(self, value):
        current = self.head

        while(current):
            if current.value == value:
                return True
            current = current.next

        return False
    
    def remove(self, value):
        current = self.head

        if current.value == value:
            self.head = self.head.next
            self.length -= 1
            return


        while(current.next):
            if current.next.value == value:
                break
            current = current.next

        if not current.next:
            return
        
        if (current.next == self.tail):
            self.tail = current

        current.next = current.next.next
        self.length -= 1

    def remove_at(self, position):
        if position < 0 or position > self.length:
            return

        current = self.head
        # finish
        pass

    def front(self):
        return self.head.value if self.head else None
    
    def back(self):
        return self.tail.value if self.tail else None

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

ll = LinkedList()
ll.append(4)
ll.append(5)
ll.append(6)
ll.append(7)
ll.append(8)

ll.remove(8)
# print(ll.contains(6))
print(ll.contains(8))
print(ll.back())
# print(ll.front())
# print(ll.back())
# print(ll.prepend(1))
# print(ll.front())
# print(ll.contains(5))
# print(ll.contains(6))