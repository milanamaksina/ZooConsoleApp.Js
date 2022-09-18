module.exports.Enclosure = class Enclosure {
    constructor(name, squareFeet, parentZoo) {
      this.name = name;
      this.animals = [];
      this.squareFeet = 1000;
      this.parentZoo = parentZoo;
    }
    AddAnimal(animal) {
        this.animals.push(animal)
    }
}