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
    /**
     * Items cannot attack by themselves
     */
    attack() {
        return null;
    }
    /**
     * Prints out the statistics for this item instance
     */
    listStats() {
        console.log("\n================================");
        console.log(`Attack Damage: ${this.attackDamage}`);
        console.log(`Ability Power: ${this.abilityPower}`);
        console.log(`Critical Strike Chance: ${this.critChance * 100}%`);
        console.log(`Armor: ${this.armor}`);
        console.log(`Magic Resist: ${this.magicResist}`);
        console.log(`Health: ${this.health}`);
        console.log(`Life Steal: ${this.lifeSteal * 100}%`);
        console.log("================================\n");
    }
}

module.exports = ItemStats;
