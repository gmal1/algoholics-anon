def zero_matrix(matrix):
    points = []

    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            val = matrix[row][col]
            if val == 0:
                points.append((row, col))

    for point in points:
        update_row(matrix, point[0])
        update_col(matrix, point[1])


def update_col(matrix, col):
    for row in range(len(matrix)):
        matrix[row][col] = 0


def update_row(matrix, row):
    for col in range(len(matrix[row])):
        matrix[row][col] = 0


matrix = [[4, 3, 1, 0], [6, 1, 2, 5], [8, 0, 1, 7], [5, 2, 1, 1]]

zero_matrix(matrix)
print(matrix)
