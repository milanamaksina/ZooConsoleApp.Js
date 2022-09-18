const { Employee } = require("./Employee.js");

module.exports.Veterinarian = class Veterinarian extends Employee {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.animalExperience = [];
    }
    AddAnimalExperience(animal) {
        this.animalExperience.push(animal.constructor.name)
    }
    
    HasAnimalExperience(animal) {
        return this.animalExperience.includes(animal.constructor.name)
    }
    HealAnimal(animal) {
        if (animal.isSick == true && this.HasAnimalExperience(animal)) {
           animal.Heal();
           console.log(`Animal ${animal.constructor.name} was healed`)
        }
    }
}