const BaseStats = require("./basestats");

/**
 * This class represents the item statistics
 *
 * @class
 */
class ItemStats extends BaseStats {
    /**
     * Constructor for ItemStats
     *
     * @constructor
     * @param {number} attackDamage - Attack damage value
     * @param {number} abilityPower - Ability power value
     * @param {number} critChance - Critical strike chance value
     * @param {number} armor - Armor value
     * @param {number} magicResist - Magic Resist value
     * @param {number} health - Health value
     */
    constructor(
        attackDamage,
        abilityPower,
        critChance,
        armor,
        magicResist,
        health
    ) {
        super(
            attackDamage,
            abilityPower,
            critChance,
            armor,
            magicResist,
            health
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
