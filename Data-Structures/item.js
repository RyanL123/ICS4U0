const ItemStats = require("./basestats");

class Item extends ItemStats {
    constructor(
        attackDamage,
        abilityPower,
        critChance,
        armor,
        magicResist,
        health,
        lifeSteal,
        name,
        cost
    ) {
        super(
            attackDamage,
            abilityPower,
            critChance,
            armor,
            magicResist,
            health,
            lifeSteal
        );
        this.name = name;
        this.cost = cost;
    }
}

module.exports = Item;
