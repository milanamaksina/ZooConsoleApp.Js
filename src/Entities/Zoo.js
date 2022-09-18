const { Enclosure } = require("./Enclosure");

module.exports.Zoo = class Zoo {
    constructor(location) {
        this.enclosures = [];
        this.employees = [];
        this.location = location;
    }
    AddEnclosure(name, squareFeet) {
        const enclosule = new Enclosure(name, squareFeet, this)
        this.enclosures.push(enclosule)
        console.log(`Add new enclosure "${name}" to "${this.location}" zoo`)
    }
    FindAvailableEnclosure(animal){
        let availableEnclosure = this.enclosures.find(
            (enclosure) => enclosure.animals?.every((item) => item.IsFriendlyWith(animal)) &&
            animal.requiredSpaceSqFt <= enclosure.squareFeet,
        )
        if(availableEnclosure){
            console.log('There is available enclosure')
            return availableEnclosure
        }
        console.log('There is no available enclosure')
        return false
    }
    AddAnimal(animal) {
        const availableEnclosure = this.FindAvailableEnclosure(animal)
        if (availableEnclosure) {
          availableEnclosure.AddAnimals(animal)
        }
        console.log(`Add ${animal.constructor.name}`)
    }
    
}
    
    
