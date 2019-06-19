from stack import Stack

def sort_stack(stack: Stack):
    temp_stack = Stack()
    while not stack.is_empty():
        curr_val = stack.pop()
        while not temp_stack.is_empty() and temp_stack.peek() > curr_val:
            stack.push(temp_stack.pop())

        temp_stack.push(curr_val)

    while not temp_stack.is_empty():
        stack.push(temp_stack.pop())


# stack = Stack()
# stack.push(1)
# stack.push(5)
# stack.push(4)
# stack.push(10)
# stack.push(6)
# stack.push(3)
# sort_stack(stack)
# print(stack.stack)