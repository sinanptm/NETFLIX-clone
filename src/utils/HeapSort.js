const heapify = (arr, n, i, key) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    const getKey = (index) => key ? arr[index][key] : arr[index];

    if (left < n && getKey(left) > getKey(largest)) {
        largest = left;
    }
    if (right < n && getKey(right) > getKey(largest)) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest, key);
    }
}

const HeapSort = (arr, key) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, key);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0, key);
    }
    return arr;
}

export default HeapSort;
