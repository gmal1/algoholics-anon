class Node:
    def __init__(self, value: int, min: int):
        self.min = min
        self.value = value

class StackMin:
    def __init__(self):
        self.min_val = None
        self.values = []

    def push(self, value):

        if not self.min_val:
            self.min_val = value
        elif value < self.min_val:
            self.min_val = value
        
        item = Node(value, self.min_val)
        self.values.append(item)

    def pop(self) -> Node:
        last = self.values.pop()
        self.min_val = last.min
        return last

    def min(self) -> int:
        return self.min_val

# stack = StackMin()
# stack.push(5)
# stack.push(43)
# stack.push(-1)
# stack.push(15)
# stack.push(2)
# stack.pop()
# print(stack.min())
# stack.pop()
# stack.pop()
# stack.pop()
# stack.pop()
# print(stack.min())