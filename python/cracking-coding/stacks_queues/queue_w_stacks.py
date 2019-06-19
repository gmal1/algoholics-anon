class Stack:
    def __init__(self):
        self.stack = []

    def push(self, value: int):
        self.stack.append(value)

    def pop(self):
        if len(self.stack) == 0:
            raise Exception('Stack empty')

        return self.stack.pop()

    def is_empty(self):
        return len(self.stack) == 0

class MyQueue:
    def __init__(self):
        self.stack1 = Stack()
        self.stack2 = Stack()

    def enqueue(self, value):
        self.stack2.push(value)

    def deque(self):
        if self.stack1.is_empty():
            while not self.stack2.is_empty():
                self.stack1.push(self.stack2.pop())
        
        if self.stack1.is_empty():
            raise Exception('Queue is empty')

        return self.stack1.pop()

# queue = MyQueue()
# queue.enqueue(1)
# queue.enqueue(2)
# queue.enqueue(3)
# queue.enqueue(4)
# print(queue.deque())
# print(queue.deque())
# queue.enqueue(5)
# queue.enqueue(6)
# print(queue.deque())
# print(queue.deque())
# print(queue.deque())
# print(queue.deque())