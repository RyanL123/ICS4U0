const BaseStats = require("./basestats");

/**
 * This class represents an item object
 *
 * @class
 */
class Item extends BaseStats {
    /**
     * Constructor for Item
     *
     * @constructor
     * @param {number} attackDamage - Attack damage value
     * @param {number} abilityPower - Ability power value
     * @param {number} critChance - Critical strike chance value
     * @param {number} armor - Armor value
     * @param {number} magicResist - Magic Resist value
     * @param {number} health - Health value
     * @param {string} name - Name of the item
     * @param {number} cost - Amount of gold the item costs
     */
    constructor(
        attackDamage,
        abilityPower,
        critChance,
        armor,
        magicResist,
        health,
        name,
        cost
    ) {
        super(
            attackDamage,
            abilityPower,
            critChance,
            armor,
            magicResist,
            health
        );
        this.name = name;
        this.cost = cost;
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
        console.log("================================\n");
    }
}

module.exports = Item;
