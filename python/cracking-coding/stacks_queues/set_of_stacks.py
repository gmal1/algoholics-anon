class SetOfStacks:
    def __init__(self):
        self.stacks = [[]]
        self.num_stacks = 1
        self.capacity = 5

    def is_full(self):
        return len(self.stacks[self.num_stacks - 1]) == self.capacity

    def push(self, value: int):
        if self.is_full():
            self.stacks.append([])
            self.num_stacks += 1

        current_stack = self.num_stacks - 1
        self.stacks[current_stack].append(value)

    def pop(self) -> int:
        current_stack = self.num_stacks - 1

        if (len(self.stacks[current_stack]) == 0):
            raise Exception('Stack is empty')

        output = self.stacks[current_stack].pop()

        if len(self.stacks[current_stack]) == 0 and current_stack > 0:
            self.stacks.pop()
            self.num_stacks -= 1

        return output
    
    def pop_at(self, index: int):
        if index < 0 or index >= self.num_stacks:
            raise Exception('Index out of bounds')

        if self.num_stacks == 1:
            return self.pop()

        stack = self.stacks[index]
        output = stack.pop()

        if len(stack) == 0:
            self.stacks.remove([])
            self.num_stacks -= 1
        
        return output
