from enum import Enum
class Color(Enum):
    RED = True
    BLACK = False

class LLRedBlackBST:
    def __init__(self, key, val, color):
        self.key = key
        self.val = val
        self.left = None
        self.right = None
        self.color = color

    def is_red(self):
        return self.color == Color.RED

    def __rotate_left(self):
        newRoot = self.right
        self.right = newRoot.left
        newRoot.left = self
        newRoot.color = self.color
        self.color = Color.RED
        return newRoot


    
    def __rotate_right(self):
        newRoot = self.left
        self.left = newRoot.right
        newRoot.right = self
        newRoot.color = self.color
        self.color = Color.RED

        return newRoot

    def __flip_colors(self):
        self.color = Color.RED
        self.left.color = Color.BLACK
        self.right.color = Color.BLACK

    def put(self, key, val):
        if key > self.key:
            if not self.right:
                self.right = LLRedBlackBST(key, val, Color.RED)
            else:
                self.right = self.right.put(key, val)
        elif key == self.key:
            self.val = val
        else:
            if not self.left:
                self.left = LLRedBlackBST(key, val, Color.RED)
            else:
                self.left = self.left.put(key, val)

        if (self.right.is_red() if self.right else False) and not (self.left.is_red() if self.left else False):
            self = self.__rotate_left()
        
        if (self.left.is_red() if self.left else False) and (self.left.left.is_red() if self.left and self.left.left else False):
            self = self.__rotate_right()

        
        if (self.left.is_red() if self.left else False) and (self.right.is_red() if self.right else False):
            self.__flip_colors()

        return self


# rbtree = LLRedBlackBST('s', 'cookies', Color.BLACK)
# for val in ['a', 'e', 'r', 'c', 'h', 'x', 'm', 'p', 'l']:
#     rbtree = rbtree.put(val, val)
