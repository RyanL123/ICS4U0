const BaseStats = require("./basestats");

class ItemStats extends BaseStats {
    constructor(
        attackDamage,
        abilityPower,
        critChance,
        armor,
        magicResist,
        health,
        lifeSteal
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
    }
    attack() {
        return null;
    }
}

module.exports = ItemStats;
