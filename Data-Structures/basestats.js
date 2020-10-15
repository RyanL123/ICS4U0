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
     * @param {number} lifeSteal - Life steal value
     */
    constructor(
        attackDamage,
        abilityPower,
        critChance,
        armor,
        magicResist,
        health,
        lifeSteal
    ) {
        this.attackDamage = attackDamage;
        this.abilityPower = abilityPower;
        this.critChance = critChance;
        this.armor = armor;
        this.magicResist = magicResist;
        this.health = health;
        this.lifeSteal = lifeSteal;
        if (new.target === BaseStats) {
            throw new TypeError("Can't directly instantiate an Abstract Class");
        }
        if (this.attack === BaseStats.prototype.attack) {
            throw new TypeError(
                "You must implement the abstract method attack"
            );
        }
        if (this.listStats === BaseStats.prototype.Stats) {
            throw new TypeError(
                "You must implement the abstract method listStats"
            );
        }
    }
    attack() {
        throw new TypeError("You must implement the abstract method attack");
    }
    listStats() {
        throw new TypeError("You must implement the abstract method listStats");
    }
}

module.exports = BaseStats;
