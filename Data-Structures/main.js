const Champion = require("./champion");
const Item = require("./item");

const Yasuo = new Champion(
    114,
    0,
    0,
    88,
    53,
    2000,
    0.15,
    "Yasuo",
    "Fighter",
    18,
    [],
    4000
);

const Syndra = new Champion(
    103,
    200,
    0,
    83,
    39,
    2050,
    0,
    "Syndra",
    "Mage",
    18,
    [],
    2500
);
const InfinityEdge = new Item(80, 0, 0.25, 0, 0, 0, 0, "Infinity Edge", 3400);
const RabadonsDeathcap = new Item(
    0,
    120,
    0,
    0,
    0,
    0,
    0,
    "Rabadon's Deathcap",
    3600
);

console.log(
    "Yasuo auto attacked Syndra for " +
        Math.round(Yasuo.attack(Syndra, "AD")) +
        " damage"
);
console.log(
    "Syndra used Dark Sphere and dealt " +
        Math.round(Syndra.attack(Yasuo, "AP")) +
        " damage to Yasuo"
);
console.log(
    "Now lets give Yasuo an item and have him auto attack Syndra again"
);
Yasuo.purchaseItem(InfinityEdge);
console.log(
    "Yasuo auto attacked Syndra for " +
        Math.round(Yasuo.attack(Syndra, "AD")) +
        " damage"
);
console.log(
    "Since infinity edge can critically strike 25% of the time, lets use it a few more times and see what happens"
);
for (let i = 0; i < 4; i++) {
    console.log(
        "Yasuo auto attacked Syndra for " +
            Math.round(Yasuo.attack(Syndra, "AD")) +
            " damage"
    );
}
