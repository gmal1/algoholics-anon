function swap(arr: number[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(items: number[], left: number, right: number): number {
  // Find the pivot by adding the two indexes together
  // and dividing by two (the middle element, effectively).
  const pivot = items[Math.floor((right + left) / 2)];
  let l = left;
  let r = right;

  console.log('** pivot is: ', pivot);
  console.log('** left is: ', items[left]);
  console.log('** right is: ', items[right]);

  // Once the left reference is greater than the right reference,
  // we have finished sorting this set of items, and we can return.
  while (l <= r) {
    // If the left pointer is less than the pivot, increment it.
    // In other words, move the pointer to the right.
    while (items[l] < pivot) {
      l++;
      console.log('l is now pointing to: ', items[l]);
    }

    // If the right pointer is greater than the pivot, decrement it.
    // In other words, move the pointer to the left.
    while (items[r] > pivot) {
      r--;
      console.log('r is now pointing to: ', items[r]);
    }

    // If the left pointer is larger than the pivot, and the right
    // pointer is not bigger than the pivot, swap the two elements.
    if (l <= r) {
      console.log('** now swapping l and r pointers: ', items[l], items[r]);

      swap(items, l, r);

      // After swapping, increment/decrement the pointers respectively.
      l++;
      r--;

      // console.log('l is now pointing to: ', items[l]);
      // console.log('r is now pointing to: ', items[r]);
    }
  }

  // The left item becomes the new pivot element.
  return l;
}

function quickSort(items, leftIndex = 0, rightIndex = items.length - 1) {
  // Declare an index that will be our pivot reference.
  var pivotIndex;

  // If the array has only one item, it's already sorted!
  // If it has no items, we don't want to try to sort it!
  if (items.length > 1) {
    // As long as the array has two items, we can parition it.
    pivotIndex = partition(items, leftIndex, rightIndex);

    console.log('** pivot is: ', items[pivotIndex]);

    // If the left reference hasn't been incremented to
    // reach the pivot yet, we want to keep comparing it.
    if (leftIndex < pivotIndex - 1) {
      quickSort(items, leftIndex, pivotIndex - 1);
    }

    // If the right reference hasn't reached the
    // pivotIndex yet, we need to keep comparing it.
    if (pivotIndex < rightIndex) {
      quickSort(items, pivotIndex, rightIndex);
    }
  }

  return items;
}

// console.log(quickSort([2, 1, 3, 5, 0]));
