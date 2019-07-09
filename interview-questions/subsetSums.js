// given an array of numbers, return all the (not necesarilly continuous) subsets
// that sum to a given number k

function subsetSums(arr, k) {
  const result = [];
  function helper(subset, sum, index) {
    if (sum > k) return;
    if (sum === k) return result.push([...subset]);
    for (let i = index; i < arr.length; i++) {
      const cand = arr[i];
      subset.push(cand);
      sum += cand;
      helper(subset, sum, i + 1);
      subset.pop();
      sum -= cand;
    }
  }
  helper([], 0, 0);
  return result;
}

console.log(subsetSums([8, 13, 3, 22, 17, 39, 87, 45, 36], 125));

// [ [ 8, 13, 3, 17, 39, 45 ],
// [ 8, 13, 17, 87 ],
// [ 8, 3, 22, 17, 39, 36 ],
// [ 13, 3, 22, 87 ] ]
