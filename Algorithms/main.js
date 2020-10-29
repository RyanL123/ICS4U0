const {
    bubbleSort,
    insertionSort,
    bubbleSortObj,
    insertionSortObj,
} = require("./sort");
const {
    linearSearch,
    binarySearch,
    linearSearchObj,
    binarySearchObj,
} = require("./search");
const numbers = require("./numbers");
const { performance } = require("perf_hooks");

function generateData() {
    let data = [],
        done = [];
    for (let i = 0; i < 1000; i++) {
        // only unique ratings
        rating = Math.round(Math.random() * 4500);
        while (done[rating]) rating = Math.round(Math.random() * 4500);
        done[rating] = true;
        data.push({
            rating: rating,
            getRank: function () {
                if (this.rating >= 4000) return "Grandmaster";
                else if (this.rating >= 3500) return "Masters";
                else if (this.rating >= 3000) return "Diamond";
                else if (this.rating >= 2500) return "Platinum";
                else if (this.rating >= 2000) return "Gold";
                else if (this.rating >= 1500) return "Silver";
                else return "Bronze";
            },
        });
    }
    return data;
}

let arr = [],
    t0,
    t1,
    tot,
    trials;

// =========================================================================================================
// Sorting
// =========================================================================================================

// Sorting list of 1000 objects
let data = generateData();
console.log(data);
bubbleSortObj(data);
console.log(data);

t0 = performance.now();
arr = numbers.numbers.slice();
bubbleSort(arr);
t1 = performance.now();
console.log(`Bubble sort took ${(t1 - t0).toFixed(2)}ms to execute`);

data = generateData();
console.log(data);
insertionSortObj(data);
console.log(data);

t0 = performance.now();
arr = numbers.numbers.slice();
insertionSort(arr);
t1 = performance.now();
console.log(`Insertion sort took ${(t1 - t0).toFixed(2)}ms to execute`);

(tot = 0), (trials = 100);
for (let i = 0; i < trials; i++) {
    t0 = performance.now();
    arr = numbers.numbers.slice();
    arr.sort();
    t1 = performance.now();
    tot += t1 - t0;
}
console.log(
    `.sort took took on average ${(tot / trials).toFixed(
        2
    )}ms to execute over ${trials} trials`
);

// =========================================================================================================
// Searching
// =========================================================================================================

data = generateData();
data.push({
    rating: 3000,
    getRank: function () {
        if (this.rating >= 4000) return "Grandmaster";
        else if (this.rating >= 3500) return "Masters";
        else if (this.rating >= 3000) return "Diamond";
        else if (this.rating >= 2500) return "Platinum";
        else if (this.rating >= 2000) return "Gold";
        else if (this.rating >= 1500) return "Silver";
        else return "Bronze";
    },
});
data.push({
    rating: 2000,
    getRank: function () {
        if (this.rating >= 4000) return "Grandmaster";
        else if (this.rating >= 3500) return "Masters";
        else if (this.rating >= 3000) return "Diamond";
        else if (this.rating >= 2500) return "Platinum";
        else if (this.rating >= 2000) return "Gold";
        else if (this.rating >= 1500) return "Silver";
        else return "Bronze";
    },
});

// Searching from list of 1000 objects
console.log(linearSearchObj(data, 3000));
console.log(linearSearchObj(data, 2000));

(tot = 0), (trials = 1000);
for (let i = 0; i < trials; i++) {
    t0 = performance.now();
    arr = numbers.numbers.slice();
    linearSearch(arr, Math.floor(Math.random() * 100000));
    t1 = performance.now();
    tot += t1 - t0;
}
console.log(
    `Linear search took on average ${(tot / trials).toFixed(
        2
    )}ms to execute over ${trials} trials`
);

data = generateData();
data.push({
    rating: 3000,
    getRank: function () {
        if (this.rating >= 4000) return "Grandmaster";
        else if (this.rating >= 3500) return "Masters";
        else if (this.rating >= 3000) return "Diamond";
        else if (this.rating >= 2500) return "Platinum";
        else if (this.rating >= 2000) return "Gold";
        else if (this.rating >= 1500) return "Silver";
        else return "Bronze";
    },
});
data.push({
    rating: 2000,
    getRank: function () {
        if (this.rating >= 4000) return "Grandmaster";
        else if (this.rating >= 3500) return "Masters";
        else if (this.rating >= 3000) return "Diamond";
        else if (this.rating >= 2500) return "Platinum";
        else if (this.rating >= 2000) return "Gold";
        else if (this.rating >= 1500) return "Silver";
        else return "Bronze";
    },
});

// Searching from list of 1000 objects
data.sort((a, b) => a.rating - b.rating);
console.log(binarySearchObj(data, 3000));
console.log(binarySearchObj(data, 2000));

(tot = 0), (trials = 100);
for (let i = 0; i < trials; i++) {
    t0 = performance.now();
    arr = numbers.numbers.slice();
    arr.sort();
    binarySearch(arr, Math.floor(Math.random() * 100000));
    t1 = performance.now();
    tot += t1 - t0;
}
console.log(
    `Sorting + binary search took on average ${(tot / trials).toFixed(
        2
    )}ms to execute over ${trials} trials`
);
