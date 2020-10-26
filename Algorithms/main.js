const { bubbleSort, insertionSort } = require("./sort");
const { linearSearch, binarySearch } = require("./search");

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

let data = generateData();
console.log(data);
bubbleSort(data);
console.log(data);

data = generateData();
console.log(data);
insertionSort(data);
console.log(data);

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
console.log(linearSearch(data, 3000));
console.log(linearSearch(data, 2000));

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
data.sort((a, b) => a.rating - b.rating);
console.log(binarySearch(data, 3000));
console.log(binarySearch(data, 2000));
