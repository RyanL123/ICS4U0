const ItemStats = require("./itemstats");

/**
 * This class represents an item object
 *
 * @class
 */
class Item extends ItemStats {
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
}

module.exports = Item;
