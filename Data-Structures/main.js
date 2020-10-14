const Champion = require("./champion");
const Item = require("./item");

const Yasuo = new Champion(
    114,
    0,
    0.5,
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

console.log(Math.round(Yasuo.attack(Syndra, "AD")));
console.log(Math.round(Syndra.attack(Yasuo, "AP")));
Yasuo.purchaseItem(InfinityEdge);
console.log(Math.round(Yasuo.attack(Syndra, "AD")));
