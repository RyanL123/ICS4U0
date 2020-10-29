const fs = require("fs");

let numbers = { numbers: [] };

for (let i = 0; i < 500000; i++) {
    numbers.numbers.push(Math.floor(Math.random() * 100000));
}

fs.writeFile("numbers.json", JSON.stringify(numbers), "utf8", (err) => {
    if (err) throw err;
});
