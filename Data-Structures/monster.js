const BaseStats = require("./basestats");

class Monster extends BaseStats {
    constructor(
        attackDamage,
        abilityPower,
        attackSpeed,
        attackRange,
        critChance,
        armor,
        magicResist,
        health,
        lifeSteal,
        movementSpeed
    ) {
        super(
            attackDamage,
            abilityPower,
            attackSpeed,
            attackRange,
            critChance,
            armor,
            magicResist,
            health,
            lifeSteal,
            movementSpeed
        );
    }
    attack(target, type) {
        if (this.health <= 0) return 0.0;
        if (type == "AD") {
            return (this.attackDamage * 100) / (100 + target.armor);
        } else if (type == "AP") {
            return (this.abilityPower * 100) / (100 + target.magicResist);
        } else return 0.0;
    }
}
