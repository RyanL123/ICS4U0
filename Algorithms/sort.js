// O(n^2)
exports.bubbleSort = function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
};

// O(n^2)
exports.insertionSort = function insertionSort(arr) {
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
};

// O(n^2)
exports.bubbleSortObj = function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].rating > arr[j + 1].rating) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
};

// O(n^2)
exports.insertionSortObj = function insertionSort(arr) {
    let n = arr.length,
        i = 0;
    while (i < n) {
        let j = i;
        while (j > 0 && arr[j - 1].rating > arr[j].rating) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
        i++;
    }
};
