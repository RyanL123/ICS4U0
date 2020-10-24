// O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

// O(log n)
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] == target) return m;
        else if (arr[m] > target) r = m - 1;
        else l = m + 1;
    }
    return -1;
}
