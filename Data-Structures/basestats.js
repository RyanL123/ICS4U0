/**
 * This class represents the base statistics
 *
 * @class
 * @abstract
 */
class BaseStats {
    /**
     * Constructor for BaseStats
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
        this.attackDamage = attackDamage;
        this.abilityPower = abilityPower;
        this.critChance = critChance;
        this.armor = armor;
        this.magicResist = magicResist;
        this.health = health;
        if (new.target === BaseStats) {
            throw new TypeError("Can't directly instantiate an Abstract Class");
        }
        if (this.listStats === BaseStats.prototype.Stats) {
            throw new TypeError(
                "You must implement the abstract method listStats"
            );
        }
    }
    listStats() {
        throw new TypeError("You must implement the abstract method listStats");
    }
}

module.exports = BaseStats;
