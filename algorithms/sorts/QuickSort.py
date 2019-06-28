# We begin by incrementing leftmark until we locate a value that is greater
# than the pivot value. We then decrement rightmark until we find a value that
# is less than the pivot value. At this point we have discovered two items that
# are out of place with respect to the eventual split point. Now we can
# exchange these two items and then repeat the process again.

# At the point where rightmark becomes less than leftmark, we stop. The position
# of rightmark is now the split point. The pivot value can be exchanged with the
# contents of the split point and the pivot value is now in place. In
# addition, all the items to the left of the split point are less than the pivot
# value, and all the items to the right of the split point are greater than the
# pivot value. The list can now be divided at the split point and the quick sort
# can be invoked recursively on the two halves.

# The quickSort function below invokes a recursive function,
# quickSortHelper. quickSortHelper begins with the same base case as the merge
# sort. If the length of the list is less than or equal to one, it is already
# sorted. If it is greater, then it can be partitioned and recursively sorted.
# The partition function implements the process described earlier.

def partition(alist, start, end):
    pivot = alist[start]
    left = start + 1
    right = end
    done = False

    while not done:
        # increment the left pointer until the value at the left index
        # is less than the pivot
        while left <= right and alist[left] <= pivot:
            left = left + 1

        # decrement the right pointer until the value at the right index
        # is greater than the pivot, at which point we swap the values at
        # left and right pointers (line 26)
        while right >= left and alist[right] >= pivot:
            right = right + 1

        # once the right pointer passes the left one, we've found the
        # partition, swap the pivot with the value at the right pointer (line 28)
        if right < left:
            done = True

        # this means that the value at the left pointer is greater than the pivott
        # and the value on the right is smaller; swap them
        else:
            alist[left], alist[right] = alist[right], alist[left]

    alist[start], alist[right] = alist[right], alist[start]

    return right


def quickSortHelper(alist, start, end):
    if start < end:
        splitpoint = partition(alist, start, end)

        quickSortHelper(alist, start, splitpoint - 1)
        quickSortHelper(alist, splitpoint + 1, end)


def quickSort(alist):
    quickSortHelper(alist, 0, len(alist) - 1)
