const { Employee } = require("./Employee.js");

module.exports.ZooKeeper = class ZooKeeper extends Employee {
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
    FeedAnimal(time, animal) {
        if (this.HasAnimalExperience(animal)) {
          console.log(`Animal ${animal.constructor.name} was fed`)
          return animal.Feed(time, this)
        }
        return false
    }
}