const { Enclosure } = require("./Enclosure");
const { HireValidatorProvader } = require("../Validators/HireValidatorProvader")

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
            (enclosure) =>  animal.requiredSpaceSqFt <= enclosure.squareFeet &&
            enclosure.animals?.every((item) => item.IsFriendlyWith(animal)) 
           
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
          availableEnclosure.AddAnimal(animal)
        }
        console.log(`Add ${animal.constructor.name}`)
    }
    FeedAnimal(time) {
        const zooKeepers = this.GetZooKeepers();
        this.enclosures.forEach((enclosure) => {
          enclosure.animals.forEach((animal) => {
            const availableZooKeeper = zooKeepers.find(
              (zooKeeper) => zooKeeper.HasAnimalExperience(animal),
            )
            if (availableZooKeeper) {
              availableZooKeeper.FeedAnimal(time, animal)
            }
          })
        })
        console.log(`Animals were fed at ${time}`)
    }
    HealAnimal() {
        const veterinarians = this.GetVeterinarians();
        this.enclosures.forEach((enclosure) => {
          enclosure.animals.forEach((animal) => {
            const availableVeterinarian = veterinarians.find(
              (veterinarian) => veterinarian.HasAnimalExperience(animal),
            )
            if (availableVeterinarian && animal.IsSick()) {
              availableVeterinarian.HealAnimal(animal)
            }
          })
        })
        console.log("animals were healed")
    }
    HireEmployee(employee) {
      let provider = new HireValidatorProvader();
        if (provider.ValidateEmployee(employee, this)) {
          this.employees.push(employee)
          console.log(`${employee.constructor.name} ${employee.FirstName} was hired`)
        } else {
          console.log("Employee wasn't hired")
        }
    }
    GetZooKeepers() {
        let zooKeepers = [];
        this.employees.forEach((employee) => {
            if (employee.constructor.name == "ZooKeeper") {
                zooKeepers.push(employee);
            }
        });
        return zooKeepers;
    }
    GetAnimals() {
        let animals = [];
        this.enclosures.forEach((enclosure) => {
            enclosure.animals.forEach((animal) => {
                animals.push(animal);
            });
        });
        return animals;
    }
    GetVeterinarians() {
        let veterinarians = [];
        this.employees.forEach((employee) => {
            if (employee.constructor.name == "Veterinarian") {
                veterinarians.push(employee);
            }
        });
        return veterinarians;
    }
}
    
    
