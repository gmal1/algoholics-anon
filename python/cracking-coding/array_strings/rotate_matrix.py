import math


def rotate_matrix(matrix):
    n = len(matrix)

    for i in range(math.floor(n / 2) + 1):
        for j in range(i, math.floor(n / 2) + 1):
            temp = matrix[i][j]
            matrix[i][j] = matrix[n - j - 1][i]
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
            matrix[j][n - i - 1] = temp


matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

rotate_matrix(matrix)
print(matrix)

matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

rotate_matrix(matrix2)
print(matrix2)
