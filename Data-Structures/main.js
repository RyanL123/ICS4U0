const Champion = require("./champion");
const Items = require("./items");
const fs = require("fs");

let logs = { interactions: [] };

// Create champions with stats
const Yasuo = new Champion(114, 0, 0, 88, 53, 2000, 0.15, "Yasuo", [], 4000);
const Syndra = new Champion(103, 200, 0, 83, 39, 2050, 0, "Syndra", [], 3600);

// Demonstration of champion and item interactions
// -----------------------------------------------

// Variable to track champion interactions so result can be pushed into logs while also being able
// to record the data associated with the action
let action = Yasuo.attack(Syndra, "AD");

logs.interactions.push(action);
console.log(
    "Yasuo auto attacked Syndra for " + Math.round(action.damage) + " damage"
);

action = Syndra.attack(Yasuo, "AP");
logs.interactions.push(action);
console.log(
    "Syndra used Dark Sphere and dealt " +
        Math.round(action.damage) +
        " damage to Yasuo"
);
console.log("Let's give Syndra an item and see the damage difference");

Syndra.listStats();
action = Syndra.purchaseItem(Items["Rabadon's Deathcap"]);
logs.interactions.push(action);
Syndra.listStats();

console.log(
    "We can see Syndra's ability power increased by 120. Lets see how much more damage she deals"
);

action = Syndra.attack(Yasuo, "AP");
logs.interactions.push(action);
console.log(
    "Syndra used Dark Sphere and dealt " +
        Math.round(action.damage) +
        " damage to Yasuo"
);

console.log(
    "Now lets give Yasuo an item and have him auto attack Syndra again"
);

action = Yasuo.purchaseItem(Items["Infinity Edge"]);
logs.interactions.push(action);

action = Yasuo.attack(Syndra, "AD");
logs.interactions.push(action);
console.log(
    "Yasuo auto attacked Syndra for " + Math.round(action.damage) + " damage"
);
console.log(
    "Since infinity edge can critically strike 50% of the time, lets use it a few more times and see what happens"
);
for (let i = 0; i < 6; i++) {
    action = Yasuo.attack(Syndra, "AD");
    logs.interactions.push(action);
    console.log(
        "Yasuo auto attacked Syndra for " +
            Math.round(action.damage) +
            " damage"
    );
}

fs.writeFile("logs.json", JSON.stringify(logs), "utf8", (err) => {
    if (err) throw err;
});
