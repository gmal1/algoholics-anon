class BinaryTree:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


def CBT(preorder, inorder):
    if len(preorder) == 0: return None

    root = BinaryTree(preorder[0])

    indxInOrder = 0

    for i in range(len(inorder)):
        if root.val == inorder[i]:
            indxInOrder = i

    val = inorder[indxInOrder]
    root.left = CBT(preorder[1:preorder.index(val) + 2], inorder[0:inorder.index(val)])
    root.right = CBT(preorder[preorder.index(val) + 2: len(preorder)], inorder[inorder.index(val)+1:len(inorder)])

    return root

root = CBT([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])

print(root.right.right.val)