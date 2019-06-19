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

    def peek(self):
        if len(self.stack) == 0:
            raise Exception('Stack empty')

        return self.stack[len(self.stack) - 1]