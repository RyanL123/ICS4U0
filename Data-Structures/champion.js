const BaseStats = require("./basestats");

/**
 * This class represents a champion object
 *
 * @class
 */
class Champion extends BaseStats {
    /**
     * Constructor for Champion
     *
     * @constructor
     * @param {number} attackDamage - Attack damage value
     * @param {number} abilityPower - Ability power value
     * @param {number} critChance - Critical strike chance value
     * @param {number} armor - Armor value
     * @param {number} magicResist - Magic Resist value
     * @param {number} health - Health value
     * @param {string} name - Name of the champion
     * @param {array} items - Items the champion currently has
     * @param {number} gold - Amount of gold the champion has
     */
    constructor(
        attackDamage,
        abilityPower,
        critChance,
        armor,
        magicResist,
        health,
        name,
        items,
        gold
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
        let log = {
            attacker: this.name,
            target: target.name,
            damage: 0,
        };
        if (this.health <= 0) return log;
        if (type == "AD") {
            // Use RNG to determine if the attack is a critical strike
            // For a critical strike chance of 15%, a number between 1-15 (inclusive) must be generated
            // for the attack to count as a critical strike
            let crit =
                Math.floor(Math.random() * 101) + 1 <= 100 * this.critChance;
            let multiplier = crit ? 2 : 1;
            log.damage =
                (this.attackDamage * 100 * multiplier) / (100 + target.armor);
            return log;
        } else if (type == "AP") {
            log.damage = (this.abilityPower * 100) / (100 + target.magicResist);
            return log;
        } else return log;
    }
    /**
     * Purchases a item. The item statistics are then added to the champion, making it stronger
     * The champion must have gold greater or equal to the cost of the item
     *
     * @param {Item} item - The item object the champion is purchasing
     * @returns {bool} - Whether the purchase was successful or not
     */
    purchaseItem(item) {
        let log = {
            champion: this.name,
            item: item.name,
            success: false,
        };
        if (item.cost > this.gold) return log;
        this.items.push(item);
        this.attackDamage += item.attackDamage;
        this.abilityPower += item.abilityPower;
        this.critChance += item.critChance;
        this.armor += item.armor;
        this.magicResist += item.magicResist;
        this.gold -= item.cost;
        console.log(this.name + " purchased " + item.name);
        log.success = true;
        return log;
    }
    /**
     * Prints out the statistics for this champion instance
     */
    listStats() {
        console.log("\n================================");
        console.log(`Name: ${this.name}`);
        console.log(`Gold: ${this.gold}`);
        console.log(`Attack Damage: ${this.attackDamage}`);
        console.log(`Ability Power: ${this.abilityPower}`);
        console.log(`Critical Strike Chance: ${this.critChance * 100}%`);
        console.log(`Armor: ${this.armor}`);
        console.log(`Magic Resist: ${this.magicResist}`);
        console.log(`Health: ${this.health}`);
        console.log(`Life Steal: ${this.lifeSteal * 100}%`);
        console.log("================================\n");
    }
    /**
     * List out all the items the champion currently has
     */
    listItems() {
        console.log(`${this.name}'s items: `);
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

module.exports = Champion;
