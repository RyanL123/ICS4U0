const BaseStats = require("./basestats");

/**
 * This class represents a champion object
 *
 * @class
 */
class Champion extends BaseStats {
    constructor(
        attackDamage,
        abilityPower,
        critChance,
        armor,
        magicResist,
        health,
        lifeSteal,
        name,
        type,
        level,
        items,
        gold
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
        this.type = type;
        this.level = level;
        this.items = items;
        this.gold = gold;
    }
    /**
     * Calculates the damage if one entity were to attack another entity. Must specify the
     * appropriate attack type for damage calculations. Ability power cannot critically strike ,
     * while basic attacks calculated with the Attack Damage stat can critically strike for
     * double the damage. The same amount of damage is subtracted from the target's health
     *
     *
     * @param {BaseStats} target - Target being attacked
     * @param {string} type - Type of damage, can only be AD or AP
     * @returns {number} - The post-mitigation damage after taking into account the target's resistances
     */
    attack(target, type) {
        if (this.health <= 0) return 0.0;
        if (type == "AD") {
            // Use RNG to determine if the attack is a critical strike
            // For a critical strike chance of 15%, a number between 1-15 (inclusive) must be generated
            // for the attack to count as a critical strike
            let crit =
                Math.floor(Math.random() * 101) + 1 <= 100 * this.critChance;
            let multiplier = crit ? 2 : 1;
            return (
                (this.attackDamage * 100 * multiplier) / (100 + target.armor)
            );
        } else if (type == "AP") {
            return (this.abilityPower * 100) / (100 + target.magicResist);
        } else return 0.0;
    }
    /**
     * Purchases a item. The item statistics are then added to the champion, making it stronger
     * The champion must have gold greater or equal to the cost of the item
     *
     * @param {Item} item - The item object the champion is purchasing
     * @returns {bool} - Whether the purchase was successful or not
     */
    purchaseItem(item) {
        if (item.cost > this.gold) return false;
        this.items.push(item);
        this.attackDamage += item.attackDamage;
        this.abilityPower += item.abilityPower;
        this.critChance += item.critChance;
        this.armor += item.armor;
        this.magicResist += item.magicResist;
        this.gold -= item.cost;
        console.log(this.name + " purchased " + item.name);
        return true;
    }
}

module.exports = Champion;
