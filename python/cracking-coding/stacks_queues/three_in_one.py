class MultiStack:
    def __init__(self, size=3, capacity=10):
        self.size = size
        self.capacity = capacity
        self.content = [None] * size * capacity
        self.sizes = [0] * size

    def index_of_top(self, stackNum) -> int:
        if stackNum < 0 or stackNum > self.size:
            raise Exception(
                "Index out of bounds, expect stackNum to be between 1 and {} (inclusive). Received: {}".format(
                    self.size, stackNum
                )
            )

        top = (stackNum - 1) * self.capacity
        return top

    def push(self, stackNum: int, value: int):
        if stackNum < 0 or stackNum > self.size:
            raise Exception(
                "Index out of bounds, expect stackNum to be between 1 and {} (inclusive). Received: {}".format(
                    self.size, stackNum
                )
            )

        if self.is_full(stackNum):
            raise Exception("Stack {} is full.".format(stackNum))

        last = self.index_of_top(stackNum) + self.sizes[stackNum - 1]
        self.sizes[stackNum - 1] += 1
        self.content[last] = value

    def pop(self, stackNum: int) -> int:
        if stackNum < 0 or stackNum > self.size:
            raise Exception(
                "Index out of bounds, expect stackNum to be between 1 and {} (inclusive). Received: {}".format(
                    self.size, stackNum
                )
            )

        if self.is_empty(stackNum):
            return None

        last = self.index_of_top(stackNum) + self.sizes[stackNum - 1] - 1
        lastVal = self.content[last]
        self.content[last] = None
        return lastVal

    def peek(self, stackNum: int) -> int:
        if stackNum < 0 or stackNum > self.size:
            raise Exception(
                "Index out of bounds, expect stackNum to be between 1 and {} (inclusive). Received: {}".format(
                    self.size, stackNum
                )
            )

        if self.is_empty(stackNum):
            return None

        topIndex = self.index_of_top(stackNum)
        return self.content[topIndex]

    def is_full(self, stackNum: int) -> bool:
        if stackNum < 0 or stackNum > self.size:
            raise Exception(
                "Index out of bounds, expect stackNum to be between 1 and {} (inclusive). Received: {}".format(
                    self.size, stackNum
                )
            )

        return self.sizes[stackNum - 1] == self.capacity

    def is_empty(self, stackNum: int) -> bool:
        if stackNum < 0 or stackNum > self.size:
            raise Exception(
                "Index out of bounds, expect stackNum to be between 1 and {} (inclusive). Received: {}".format(
                    self.size, stackNum
                )
            )

        return self.sizes[stackNum - 1] == 0


multiStack = MultiStack()
print(multiStack.pop(3))
multiStack.push(3, 14)
multiStack.push(3, 21)
multiStack.push(3, 21)
print(multiStack.peek(3))
