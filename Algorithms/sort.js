// O(n^2)
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

arr = [5, 2, 4, 3, 34, 1, 34];
bubbleSort(arr);
console.log(arr);

// O(n^2)
function insertionSort(arr) {
    let n = arr.length,
        i = 0;
    while (i < n) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
        i++;
    }
}

arr = [5, 2, 4, 3, 34, 1, 34];
insertionSort(arr);
console.log(arr);
