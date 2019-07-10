def heapify(list, indx, comparator):
    element = list[indx]
    
    left_indx = (indx + 1) * 2 - 1
    right_indx = (indx + 1) * 2

    cand = indx

    if left_indx < len(list) and comparator(list[left_indx], list[cand]):
        cand = left_indx

    if right_indx < len(list) and comparator(list[right_indx], list[cand]):
        cand = right_indx

    if cand != indx:
        list[indx] = list[cand]
        list[cand] = element
        heapify(list, cand, comparator)

def heapify_min(list):
    for i in reversed(range(len(list))):
        heapify(list, i, lambda x, y: x < y)

def heapify_max(list):
    for i in reversed(range(len(list))):
        heapify(list, i, lambda x, y: x > y)

def sink(indx, heap):
    left_indx = (indx + 1) * 2 - 1
    right_indx = left_indx + 1

    if left_indx > len(heap):
        return

    if heap[left_indx] < heap[indx]:
        heap[indx], heap[left_indx] = heap[left_indx], heap[indx]
    elif heap[right_indx] < heap[indx]:
        heap[indx], heap[right_indx] = heap[right_indx], heap[indx]

def heappop(heap):
    top = heap[0]
    heap[0] = heap[len(heap) - 1]
    sink(0, heap)
    heap.pop()
    return top

def swim(indx, heap):
    parent = int(indx/2)

    if heap[parent] > heap[indx]:
        heap[parent], heap[indx] = heap[indx], heap[parent]
        swim(parent, heap)


def heappush(value, heap):
    heap.append(value)
    swim(len(heap) - 1, heap)



# a = [10, 20, 15, 12, 40, 25, 18]
# heapify_min(a)
# print(heappop(a))
# print(a)
# heappush(10, a)
# print(a)