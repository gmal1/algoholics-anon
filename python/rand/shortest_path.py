from collections import deque, namedtuple

Position = namedtuple('Position', 'row col steps')

def shortestPath(numRows, numCols, area):
    visited = [[False for i in range(numCols)] for i in range(numRows)]
    queue = deque()
    queue.append(Position(row=0, col=0, steps=0))

    while len(queue):
        row, col, steps = queue.popleft()
        
        if (visited[row][col]): continue
        visited[row][col] = True

        up = area[row - 1][col] if row - 1 >= 0 and not visited[row - 1][col] else 0
        down = area[row + 1][col] if row + 1 < numRows and not visited[row + 1][col] else 0
        left = area[row][col - 1] if col - 1 >= 0 and not visited[row][col - 1] else 0
        right = area[row][col + 1] if col + 1 < numCols and not visited[row][col + 1] else 0

        if area[row][col] == 9:
            return steps
        
        if up:
            queue.append(Position(row=(row-1), col=col, steps=steps+1))
        if down:
            queue.append(Position(row=(row+1), col=col, steps=steps+1))
        if left:
            queue.append(Position(row=row, col=(col-1), steps=steps+1))
        if right:
            queue.append(Position(row=row, col=(col+1), steps=steps+1))

assert(shortestPath(3, 3, [
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1],
]) == 3)

assert(shortestPath(5, 4, [
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 9, 1],
  [0, 0, 1, 1],
]) == 5)

assert(shortestPath(3, 4, [
  [1, 1, 0, 9],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
]) == 7)