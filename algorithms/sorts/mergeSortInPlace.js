function merge(arr, aux, lo, mid, hi) {
  for (let i = lo; i <= hi; i += 1)
    aux[i] = arr[i];

  let i = lo, j = mid + 1;
  for (let k = lo; k <= hi; k += 1) {
    if (i > mid) arr[k] = aux[j++];
    else if (j > hi) arr[k] = aux[i++];
    else if (aux[j] < aux[i]) arr[k] = aux[j++];
    else arr[k] = aux[i++];
  }
}

function mergeSort(arr, aux, lo, hi) {
  if (!aux || !(aux instanceof Array)) {
    lo = 0;
    hi = arr.length - 1;
    aux = new Array(arr.length);
  }
  if (hi <= lo) return;
  let mid = lo + Math.floor((hi - lo) / 2);
  mergeSort(arr, aux, lo, mid);
  mergeSort(arr, aux, mid+1, hi);
  merge(arr, aux, lo, mid, hi);
}

function genRandArray(max, size) {
  const output = [];

  for (let i = 0; i < size; i += 1) {
    const rand = Math.floor(Math.random() * max);
    output.push(rand);
  }

  return output;
}

const arr = genRandArray(10, 10);
mergeSort(arr);
console.log(arr);