/**
 * This class represents the base statistics
 *
 * @class
 * @abstract
 */
class BaseStats {
    /**
     * @constructor
     * @param {number} attackDamage
     * @param {number} abilityPower
     * @param {number} critChance
     * @param {number} armor
     * @param {number} magicResist
     * @param {number} health
     * @param {number} lifeSteal
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
    }
    attack() {
        throw new TypeError("You must implement the abstract method attack");
    }
    listStats() {
        throw new TypeError("You must implement the abstract method listStats");
    }
}

module.exports = BaseStats;
